import * as express from "express";
import * as jwt from "jsonwebtoken";
import db from "../../db";
import { jwtconfig } from "../../config";
import { generateHash } from "../../utils/password";

const router = express.Router();

router.post("/", async (req, res) => {
    const newUser = req.body;
    try {
        newUser.password = generateHash(newUser.password);
        const results = await db.users.insert(newUser);
        const id = results.insertId;
        const token = jwt.sign({ userid: id, email: newUser.email, role: 1 }, jwtconfig.secret, {
            expiresIn: jwtconfig.expires,
        });
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "oh no, we done goofed", error });
    }
});

export default router;
