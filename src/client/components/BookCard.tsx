import React from "react";
import { Books, Categories } from "../../types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DELETE } from "../utils/fetcher-helper";

const BookCard = ({ book, isDetails }: { book: Books; isDetails?: boolean }) => {
    const nav = useNavigate();
    const { id } = useParams();

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault;
        DELETE(`/api/books/${id}`);
        nav("/books");
    };
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-title">
                    <div className="card-header display-6">{book.title}</div>
                </div>
                <div className="card-body">
                    <h6>{book.author}</h6>
                    <p>{book.categoryid}</p>
                    <p>${book.price}</p>
                    {!isDetails && (
                        <Link
                            className="btn"
                            to={`/books/${book.id}`}
                        >
                            Book {book.id}
                        </Link>
                    )}
                    {isDetails && (
                        <>
                            <Link
                                className="btn"
                                to={`/books/${book.id}/update`}
                            >
                                Edit {book.id}
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="btn"
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
