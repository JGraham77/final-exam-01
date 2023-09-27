import * as dotenv from "dotenv";

dotenv.config();

export const sqlconfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA,
};

export const jwtconfig = {
    secret: process.env.JWT_SECRET as string,
    expires: process.env.JWT_EXPIRES,
};
