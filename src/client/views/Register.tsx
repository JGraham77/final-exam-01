import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST, TOKEN_KEY } from "../utils/fetcher-helper";

const Register = () => {
    const nav = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        POST("/auth/register", { name, email, password }).then((token) => {
            localStorage.setItem(TOKEN_KEY, token);
            nav("/books");
        });
    };

    return (
        <div>
            <form className="form-group border">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="btn"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
