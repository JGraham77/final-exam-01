import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AllBooks from "./views/AllBooks";

interface AppProps {}

const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                    <Route
                        path="/books"
                        element={<AllBooks />}
                    />
                    <Route
                        path="/books/new"
                        element={<h1>Create New Book</h1>}
                    />
                    <Route
                        path="/books/:id/update"
                        element={<h1>Update Book</h1>}
                    />
                    <Route
                        path="/books/:id"
                        element={<h1>One Book</h1>}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
