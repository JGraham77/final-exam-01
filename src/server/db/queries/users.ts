import { Query } from "..";
import { MysqlResponse, Users } from "../../../types";

const find = (column: string, value: string) => Query<Users[]>("SELECT * FROM users WHERE ??=?", [column, value]);

const insert = (newUser: { email: string; password: string; name: string }) =>
    Query<MysqlResponse>("INSERT INTO users SET ?", [newUser]);

export default {
    find,
    insert,
};
