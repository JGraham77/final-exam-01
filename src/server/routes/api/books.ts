import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [book] = await db.books.getOne(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: "Cannot find a book with that id." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.sqlMessage || error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await db.books.getAll();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.sqlMessage || error.message });
    }
});

export default router;
