import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const BudgetCategory = ({ categoryChildren, categoryParent }) => {
  const [parentSpent, setParentSpent] = useState(0);
  const [parentAvailable, setParentAvailable] = useState(0);
  const [children, setChildren] = useState(categoryChildren);

  const formatValue = (value) => (value / 100).toFixed(2);

  useEffect(() => {
    // calculate parent values on render
    const reducer = (aggregator, current) => aggregator + current.spent;
    const initialValue = 0;
    const totalSpent = categoryChildren.reduce(reducer, initialValue);

    setParentSpent(totalSpent);
    setParentAvailable(categoryParent.budget - totalSpent);
  }, []);

  const handleAddChildren = () => {
    const newChild = {
      id: 1,
      name: 'New child',
      parent: categoryParent.name,
      spent: 0,
    };

    setChildren(children.concat(newChild));
  };

  const returnHtml = children.map((child) => (
    <tr key={child.id}>
      <td
        className="p-2"
        colSpan="2"
      >
        {child.name}
      </td>
      <td
        className="p-2"
      >
        R$
        {formatValue(child.spent)}
      </td>
      <td
        className="p-2"
      >
        R$
        {formatValue(categoryParent.budget - child.spent)}
      </td>
    </tr>
  ));

  const classes = ['p-2'];

  if (parentAvailable < 0) {
    classes.push('bg-amaranth-red');
  } else if (parentAvailable > 0) {
    classes.push('bg-forest-green-crayola');
  }

  const parentJsx = (
    <tr
      className="
        bg-gray-400
        font-bold
      "
      key={categoryParent.name}
    >
      <td
        className="
          p-2
        "
      >
        <p>
          {categoryParent.name}
          {' '}
          <button type="button" onClick={handleAddChildren}>(+)</button>
        </p>
      </td>
      <td
        className="
          p-2
        "
      >
        R$
        {formatValue(categoryParent.budget)}
      </td>
      <td
        className="
          p-2
        "
      >
        R$
        {formatValue(parentSpent)}
      </td>
      <td
        className={classes.join(' ')}
      >
        R$
        {formatValue(parentAvailable)}
      </td>
    </tr>
  );

  returnHtml.unshift(parentJsx);

  return (
    <tbody>
      {returnHtml}
    </tbody>
  );
};

BudgetCategory.propTypes = {
  categoryChildren: PropTypes.arrayOf(PropTypes.object),
  categoryParent: PropTypes.shape({
    name: PropTypes.string,
    budget: PropTypes.number,

  }),
};

BudgetCategory.defaultProps = {
  categoryChildren: [],
  categoryParent: [],
};

export default BudgetCategory;
