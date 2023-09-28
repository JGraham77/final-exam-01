import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GET, PUT } from "../utils/fetcher-helper";
import { Categories } from "../../types";

const Update = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [categories, setCategories] = useState<Categories[]>([]);
    const [categoryid, setCategoryid] = useState();

    useEffect(() => {
        GET(`/api/books/${id}`).then((book) => {
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setCategoryid(book.setCategoryid);
        });
    }, [id]);

    useEffect(() => {
        GET("/api/categories").then(setCategories);
        GET(`/api/books/${id}`).then((book) => {
            setTitle(book.title);
            setPrice(book.price);
            setCategoryid(book.categoryid);
        });
    }, []);

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        PUT(`/api/books/${id}`, { title, author, price, categoryid });
        nav(`/books/${id}`);
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
                        onClick={handleUpdate}
                        className="btn"
                    >
                        Update Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;
