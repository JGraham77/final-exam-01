import * as React from "react";
import { useState, useEffect } from "react";
import { Books } from "../../types";
import { GET } from "../utils/fetcher-helper";
import BookCard from "../components/BookCard";
import { useParams } from "react-router-dom";

interface BooksProps {}

const BookDetails = (props: BooksProps) => {
    const { id } = useParams();
    const [book, setBook] = useState<Books>();

    useEffect(() => {
        GET(`/api/books/${id}`).then(setBook);
    }, [id]);
    return (
        <div>
            <h1>Book #{id}</h1>
            {book && (
                <BookCard
                    isDetails
                    book={book}
                />
            )}
        </div>
    );
};

export default BookDetails;
