import React from "react";
import { Navigate } from "react-router-dom";
import { TOKEN_KEY } from "../utils/fetcher-helper";

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if (!TOKEN) {
        return <Navigate to="/login" />;
    } else {
        return <>{children}</>;
    }
};

interface PrivateRouteProps {
    children: React.ReactNode;
}

export default PrivateRoute;
