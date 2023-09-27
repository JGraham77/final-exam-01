import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AllBooks from "./views/AllBooks";
import NewBook from "./views/NewBook";
import PrivateRoute from "./components/PrivateRoute";
import Update from "./views/Update";
import BookDetails from "./views/BookDetails";

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
                        element={
                            <PrivateRoute>
                                <NewBook />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/books/:id/update"
                        element={
                            <PrivateRoute>
                                <Update />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/books/:id"
                        element={
                            <PrivateRoute>
                                <BookDetails />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
