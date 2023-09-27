import * as React from "react";
import { useState, useEffect } from "react";
import { Books, Categories } from "../../types";
import { GET } from "../utils/fetcher-helper";
import BookCard from "../components/BookCard";

interface BooksProps {}

const AllBooks = (props: BooksProps) => {
    const [books, setBooks] = useState<Books[]>([]);

    useEffect(() => {
        GET("/api/books").then(setBooks);
    }, []);
    return (
        <div>
            {books.map((book) => (
                <BookCard
                    book={book}
                    key={`book-card-${book.id}`}
                />
            ))}
        </div>
    );
};

export default AllBooks;
