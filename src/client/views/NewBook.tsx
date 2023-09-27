import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET, POST } from "../utils/fetcher-helper";
import { Categories } from "../../types";

const NewBook = () => {
    const nav = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [categories, setCategories] = useState<Categories[]>([]);
    const [categoryid, setCategoryid] = useState("");

    useEffect(() => {
        GET("/api/categories").then((categories) => {
            setCategories(categories);
            setCategoryid(categories[0].id);
        });
    });

    return (
        <div>
            <div></div>
        </div>
    );
};

export default NewBook;
