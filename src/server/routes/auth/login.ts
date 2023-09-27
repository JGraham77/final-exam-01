import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as passport from "passport";
import { jwtconfig } from "../../config";
import { ReqUser } from "../../../types";

const router = express.Router();

router.post("/", passport.authenticate("local", { session: false }), async (req: ReqUser, res) => {
    try {
        const token = jwt.sign({ userid: req.user!.id, email: req.user!.email }, jwtconfig.secret, {
            expiresIn: jwtconfig.expires,
        });
    } catch (error) {}
});

export default router;
