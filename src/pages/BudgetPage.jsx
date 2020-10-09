import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePageTitle } from "../actions/layoutReducer";
import BudgetCategory from "../components/BudgetCategory";

const BudgetPage = ({ dispatch }) => {
  const [categories, setCategories] = useState([]);
  const [nextCategoryId, setNextCategoryId] = useState(0);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    dispatch(changePageTitle("Budget"));

    // get categories and their children from localstorage
    // (this should be replaced by db later)

    if (!localStorage.getItem("categories")) {
      setCategories([]);
      localStorage.setItem("categories", JSON.stringify(categories));
    }

    if (!localStorage.getItem("children")) {
      setChildren([]);
      localStorage.setItem("children", JSON.stringify(children));
    }

    setCategories(JSON.parse(localStorage.getItem("categories")));
    setChildren(JSON.parse(localStorage.getItem("children")));

    const categoryIdReducer = (aggregator, accumulator) =>
      Math.max(aggregator, accumulator.id);
    setNextCategoryId(categories.reduce(categoryIdReducer, nextCategoryId));
  }, []);

  const addCategory = () => {
    //
    const newCategory = {
      id: nextCategoryId,
      name: "New category",
      children: [],
      budget: 0,
    };

    const newCategories = categories.concat(newCategory);
    setCategories(newCategories);
    setNextCategoryId(nextCategoryId + 1);
  };

  return (
    <div>
      <table
        className="
                    w-full
                  "
      >
        <thead>
          <tr
            className="
                        border-solid
                        border-2
                        border-black
                      "
          >
            <th className="p-2">
              Category name
              <button type="button" onClick={addCategory}>
                (+)
              </button>
            </th>
            <th className="p-2">Category Budget</th>
            <th className="p-2">Category Spent</th>
            <th className="p-2">Category Available</th>
          </tr>
        </thead>
        {categories.map((category) => {
          const filterFunc = (child) => child.parent === category.name;
          const categoryChildren = children.filter(filterFunc);

          return (
            <BudgetCategory
              categoryParent={category}
              categoryChildren={categoryChildren}
              key={category.id}
            />
          );
        })}
      </table>
    </div>
  );
};

BudgetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BudgetPage);
