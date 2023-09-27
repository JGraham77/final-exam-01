import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <Link
                className="m-2"
                to={"/"}
            >
                Home
            </Link>
            <Link
                className="m-2"
                to={"/login"}
            >
                Login
            </Link>
            <Link
                className="m-2"
                to={"/register"}
            >
                Register
            </Link>
            <Link
                className="m-2"
                to={"/books"}
            >
                All Books
            </Link>
            <Link
                className="m-2"
                to={"/books/new"}
            >
                Add Book
            </Link>
        </div>
    );
};

export default Navbar;
