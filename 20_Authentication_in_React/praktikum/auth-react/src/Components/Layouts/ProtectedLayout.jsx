import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    const isLogin = localStorage.getItem("isLogin") == "true";
    return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
