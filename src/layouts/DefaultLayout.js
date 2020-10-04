import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePageTitle } from '../actions/layoutReducer'

const DefaultLayout = (props) => {
    console.log(props);
    return (
        <div className="
            h-screen
            grid
            grid-cols-12
            grid-rows-6
        ">
            <div
                className="
                    p-8
                    col-span-3
                    row-span-6
                    bg-space-cadet
                    text-center
                "
            >
            <h1
                className="
                    font-libre-franklin
                    font-bold
                    text-4xl
                    text-alice-blue
                    mb-8
                "
            >Loot Saver</h1>
            <ul
                className="font-libre-franklin text-4xl"
            >
                <Link to="/">
                <li
                    className="
                        px-8
                        inline-flex
                        bg-manatee
                        border-solid
                        border-2
                        border-black
                        rounded
                        mb-2
                    "
                >Dashboard</li>
                </Link>
                <Link to="/budget">
                <li
                    className="
                        px-8
                        inline-flex
                        bg-manatee
                        border-solid
                        border-2
                        border-black
                        rounded
                        mb-2
                    "
                >Budget</li>
                </Link>
                <Link to="/expenses">
                <li
                    className="
                        px-8
                        inline-flex
                        bg-manatee
                        border-solid
                        border-2
                        border-black
                        rounded
                        mb-2
                    "
                >Expenses</li>
                </Link>
            </ul>
            </div>
            <div
                className="
                    p-8
                    col-span-9
                    row-span-6
                    h-auto
                    bg-manatee
                "
            >
                <div
                    className="
                        inline-flex
                        p-4
                        font-libre-franklin
                        text-2xl
                        bg-alice-blue
                        rounded
                        border-solid
                        border-2
                        border-black
                        shadow-md
                        mb-4
                    "
                >
                    <p>
                        <span className="font-bold">Page:</span> {props.layout.pageTitle}
                    </p>
                </div>
                <div
                    className="
                        bg-alice-blue
                        h-full
                        border-solid
                        border-2
                        border-black
                        border-b-0
                        rounded
                        shadow-lg
                        p-4
                    "
                >
            {props.children}
            </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { layout } = state;
    return {
        layout
    }
}

export default connect(mapStateToProps)(DefaultLayout);