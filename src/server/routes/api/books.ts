import * as express from "express";
import db from "../../db";
import { tokenCheck } from "../../middleware/tokencheck.mw";

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

router.post("/", tokenCheck, async (req, res) => {
    try {
        const { categoryid, title, author, price } = req.body;
        if (!categoryid || !title || !author || !price) {
            res.status(400).json({ message: "Please fill out all information about book." });
            return;
        }

        const results = await db.books.create({ categoryid, title, author, price });
        const bookid = results.insertId;

        res.status(201).json({ message: "Successfully added book!", id: bookid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot add that book." });
    }
});

router.put("/:id", tokenCheck, async (req, res) => {
    try {
        const bookid = parseInt(req.params.id);

        const { categoryid, title, author, price } = req.body;

        if (!categoryid || !title || !author || !price) {
            res.status(400).json({ message: "Please fill out all information about book." });
            return;
        }

        await db.books.update(categoryid, title, author, price, bookid);
        res.status(201).json({ message: "Successfully updated book!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot update that book." });
    }
});

router.delete("/:id", tokenCheck, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await db.books.destroy(id);
        res.status(200).json({ message: "Successfully deleted book!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot delete that book." });
    }
});

export default router;
