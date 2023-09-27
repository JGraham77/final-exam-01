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
    }, []);

    const handleNewBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        POST(`/api/books`, { title, author, price, categoryid }).then((data) => {
            nav(`/books`);
        });
    };

    return (
        <div>
            <h1>Add A New Book!</h1>
            <form className="form-control">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="categories">Categories</label>
                <select
                    name="categories"
                    id="categories"
                    defaultValue={categoryid}
                    className="form-control"
                >
                    {categories.map((category) => (
                        <option
                            value={category.id}
                            key={`category-id-${category.id}`}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
                <div className="p-2">
                    <button
                        onClick={handleNewBook}
                        className="btn"
                    >
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewBook;
