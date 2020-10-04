import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePageTitle } from '../actions/layoutReducer';

const BudgetPage = (props) => {

    useEffect(() => {
        props.dispatch(changePageTitle('Budget'))
    });

    const tableHeads = [
        'Category Name',
        'Category Budget',
        'Category Spent',
        'Category Available'
    ];

    const sampleCategoryParents = [
        {
            name: 'Example Category 1',
            budget: 100000,
        },
        {
            name: 'Example Category 2',
            budget: 100000,
        },
        {
            name: 'Example Category 3',
            budget: 100000,
        },
    ];

    const sampleCategoryChildren = [
        {
            name: 'Example child 1',
            parent: 'Example Category 1',
            spent: 20000
        },
        {
            name: 'Example child 2',
            parent: 'Example Category 1',
            spent: 30000
        },
        {
            name: 'Example child 3',
            parent: 'Example Category 2',
            spent: 50000
        },
        {
            name: 'Example child 4',
            parent: 'Example Category 2',
            spent: 50000
        },
        {
            name: 'Example child 5',
            parent: 'Example Category 3',
            spent: 100000
        },
        {
            name: 'Example child 6',
            parent: 'Example Category 3',
            spent: 100000
        },
    ];

    const formatValue = (value) => {
        return (value / 100).toFixed(2);
    }

    return (
        <div>
            <table
                className="
                        w-full
                    "
            >
                <thead>
                    <tr className="
                            border-solid
                            border-2
                            border-black
                        ">
                        {
                            tableHeads.map((th, key) => {
                                return (
                                    <th key={key} className="
                                            p-2
                                        ">
                                        {th}
                                    </th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sampleCategoryParents.map((parent, parentKey) => {
                            //for each parent find its children and render all of them
                            let children = sampleCategoryChildren.filter(child => {
                                return child.parent === parent.name;
                            });

                            parent.spent = 0;

                            let returnHtml = children.map((child, key) => {
                                parent.spent += child.spent;
                                return (
                                    <tr key={parentKey.toString().concat(key.toString())}>
                                        <td
                                            className="
                                            p-2
                                        "
                                            colSpan="2">{child.name}</td>
                                        <td
                                            className="
                                                p-2
                                            "
                                        >R$ {formatValue(child.spent)}</td>
                                        <td
                                            className="
                                                p-2
                                            "
                                        >R$ {formatValue(parent.budget - child.spent)}</td>
                                    </tr>
                                );
                            });

                            parent.available = parent.budget - parent.spent;


                            let classes = ['p-2'];

                            if (parent.available < 0) {
                                classes.push('bg-amaranth-red');
                            } else if (parent.available > 0) {
                                classes.push('bg-forest-green-crayola');
                            }

                            let parentJsx = (
                                <tr
                                    className="
                                    bg-gray-400
                                    font-bold
                                "
                                    key={parentKey}>
                                    <td
                                        className="
                                            p-2
                                        "
                                    >{parent.name}</td>
                                    <td
                                        className="
                                            p-2
                                        "
                                    >R$ {formatValue(parent.budget)}</td>
                                    <td
                                        className="
                                            p-2
                                        "
                                    >R$ {formatValue(parent.spent)}</td>
                                    <td
                                        className={classes.join(' ')}
                                    >R$ {formatValue(parent.available)}</td>
                                </tr>
                            );

                            returnHtml.unshift(parentJsx);

                            return returnHtml;
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { count } = state;
    return {
        count
    }
}

export default connect(mapStateToProps)(BudgetPage)