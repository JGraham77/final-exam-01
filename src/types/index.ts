export interface Users {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    created_at?: Date;
    name?: string;
}

export interface Categories {
    id?: number;
    name?: string;
}

export interface NewBooks {
    categoryid: Categories["id"];
    title: string;
    author: string;
    price: number;
}

export interface Books extends NewBooks {
    id: number;
    created_at: Date;
}

export interface Payload extends Users {
    userid?: number;
}

// export interface ReqUser extends Request {
//     user?: Users | Payload;
// }

declare global {
    namespace Express {
        interface User extends Omit<Users, "password"> {}
    }
}

export interface MysqlResponse {
    affectedRows: number;
    insertId: number;
}
