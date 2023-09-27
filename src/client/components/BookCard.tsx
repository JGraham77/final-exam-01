import React from "react";
import { Books, Categories } from "../../types";
import { Link } from "react-router-dom";

const BookCard = ({ book, isDetails }: { book: Books; isDetails?: boolean }) => {
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
                        <Link
                            className="btn"
                            to={`/books/${book.id}/update`}
                        >
                            Edit or Delete {book.id}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
