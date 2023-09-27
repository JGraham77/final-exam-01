import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [category] = await db.categories.getOne(id);
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not get all category" });
    }
});

router.get("/", async (req, res) => {
    try {
        const all = await db.categories.getAll();
        res.json(all);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not get all categories" });
    }
});

export default router;
