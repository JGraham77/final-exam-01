import React from "react";
import { Books, Categories } from "../../types";
import { Link } from "react-router-dom";

const BookCard = ({ book, category, isDetails }: { book: Books; category?: Categories; isDetails?: boolean }) => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-title">
                    <div className="card-header display-6">{book.title}</div>
                </div>
                <div className="card-body">
                    <h6>{book.author}</h6>
                    <p>{book.categoryid}</p>
                    <p>{book.price.toLocaleString("us-US", { style: "currency", currency: "USD" })}</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
