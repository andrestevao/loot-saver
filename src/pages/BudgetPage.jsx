import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePageTitle } from "../actions/layoutReducer";
import BudgetCategory from "../components/BudgetCategory";

const BudgetPage = ({ dispatch }) => {
  const [categories, setCategories] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    dispatch(changePageTitle("Budget"));

    const sampleCategoryParents = [
      {
        name: "Example Category 1",
        budget: 100000,
      },
      {
        name: "Example Category 2",
        budget: 100000,
      },
      {
        name: "Example Category 3",
        budget: 100000,
      },
    ];

    setCategories(sampleCategoryParents);

    const sampleCategoryChildren = [
      {
        id: 1,
        name: "Example child 1",
        parent: "Example Category 1",
        spent: 20000,
      },
      {
        id: 2,
        name: "Example child 2",
        parent: "Example Category 1",
        spent: 30000,
      },
      {
        id: 3,
        name: "Example child 3",
        parent: "Example Category 2",
        spent: 50000,
      },
      {
        id: 4,
        name: "Example child 4",
        parent: "Example Category 2",
        spent: 50000,
      },
      {
        id: 5,
        name: "Example child 5",
        parent: "Example Category 3",
        spent: 100000,
      },
      {
        id: 6,
        name: "Example child 6",
        parent: "Example Category 3",
        spent: 100000,
      },
    ];

    setChildren(sampleCategoryChildren);
  }, []);

  const tableHeads = [
    "Category Name",
    "Category Budget",
    "Category Spent",
    "Category Available",
  ];

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
            {tableHeads.map((th) => (
              <th
                key={th}
                className="
                                            p-2
                                        "
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>
        {categories.map((category) => {
          const filterFunc = (child) => child.parent === category.name;
          const categoryChildren = children.filter(filterFunc);

          return (
            <BudgetCategory
              categoryParent={category}
              categoryChildren={categoryChildren}
              key={category.name}
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
