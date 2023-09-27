import { Query } from "..";
import { Categories } from "../../../types";

const getAll = () => Query<Categories[]>("SELECT * from categories");

const getOne = (id: Categories["id"]) => Query<Categories[]>("SELECT * FROM categories WHERE id=?", [id]);

export default {
    getAll,
    getOne,
};
