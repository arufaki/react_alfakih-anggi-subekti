import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";

const LoginPage = ({ setIsLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLogin(true);
        navigate("/create-product");
    };
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-roboto text-[32px] font-bold mb-4">Sign In</h1>
            <Button label="Login" variant="default" onClick={handleLogin} />
        </section>
    );
};

export default LoginPage;
