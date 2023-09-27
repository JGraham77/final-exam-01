import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as passport from "passport";
import { jwtconfig } from "../../config";
// import { ReqUser } from "../../../types";

const router = express.Router();

router.post("/", passport.authenticate("local", { session: false }), async (req, res) => {
    try {
        const token = jwt.sign({ userid: req.user!.id, email: req.user!.email, role: 1 }, jwtconfig.secret, {
            expiresIn: jwtconfig.expires,
        });
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "oh no, we done goofed", error });
    }
});

export default router;
