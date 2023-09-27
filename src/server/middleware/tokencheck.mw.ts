import * as passport from "passport";
import { Request, Response, NextFunction } from "express";

export function tokenCheck(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("jwt", (err: any, user: Express.User | undefined, info: any) => {
        if (err) {
            return next(err);
        }

        if (info) {
            return res.status(401).json({ message: info.message });
        }

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        req.user = user;
        next();
    })(req, res, next);
}
