// import * as passport from "passport";
// import * as PassportLocal from "passport-local";
// import * as PassportJWT from "passport-jwt";
// import db from "../db";
// import { Application } from "express";
// import { jwtconfig } from "../config";
// import { compareHash } from "../utils/password";
// import { Payload } from "../../types";

// export function configurePassport(app: Application) {
//     passport.use(
//         new PassportLocal.Strategy(
//             {
//                 usernameField: "email",
//                 session: false,
//             },
//             async (email, password, done) => {
//                 try {
//                     const [userFound] = await db.users.find("email", email);
//                     if (userFound && userFound.password && compareHash(password, userFound.password)) {
//                         delete userFound.password;
//                         done(null, userFound);
//                     } else {
//                         done(null, false);
//                     }
//                 } catch (error) {
//                     done(error);
//                 }
//             }
//         )
//     );

//     passport.use(
//         new PassportJWT.Strategy(
//             {
//                 jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//                 secretOrKey: jwtconfig.secret,
//             },
//             (payload: Payload, done) => {
//                 try {
//                     done(null, payload);
//                 } catch (error) {
//                     done(error);
//                 }
//             }
//         )
//     );

//     app.use(passport.initialize());
// }
