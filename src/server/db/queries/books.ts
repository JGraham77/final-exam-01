import { Query } from "..";
import { NewBooks, Books } from "../../../types";

const getAll = () =>
    Query<Books[]>(
        "SELECT b.id, b.title, b.author, b.price, b.created_at, c.name FROM books b JOIN categories c ON c.id=b.categoryid"
    );

const getOne = (id: Books["id"]) =>
    Query<Books[]>(
        "SELECT b.id, b.title, b.author, b.price, b.created_at, c.name FROM books b JOIN categories c ON c.id=b.categoryid WHERE b.id=?",
        [id]
    );

const create = (newBook: NewBooks) => Query("INSERT INTO books SET ?", [newBook]);

const update = (
    title: Books["title"],
    author: Books["author"],
    price: Books["price"],
    categoryid: Books["categoryid"],
    id: Books["id"]
) =>
    Query("UPDATE books SET title=?, author=?, price=?, categoryid=? WHERE id=?", [
        title,
        author,
        price,
        categoryid,
        id,
    ]);

const destroy = (id: Books["id"]) => Query("DELETE FROM books WHERE id=?", [id]);

export default {
    getAll,
    getOne,
    create,
    update,
    destroy,
};
