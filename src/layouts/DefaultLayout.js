import React from 'react';
import { Link } from 'react-router-dom';

const DefaultLayout = (props) => (
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
                row-span-5
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
                row-span-5
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
                    <span className="font-bold">Page:</span> Page that youre currently on
                </p>
            </div>
        {props.children}
        </div>
        <div
            className="
                col-span-12
                row-span-1
                bg-space-cadet
                text-center
            "
        >
        <h1
            className="
                font-libre-franklin
                font-bold
                text-2xl
                text-alice-blue
            "
        >dunno what to put here</h1>
        </div>
    </div>
);

export default DefaultLayout;