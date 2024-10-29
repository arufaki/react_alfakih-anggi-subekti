import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const HomePage = () => {
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <h1 className="font-jost text-[30px] font-bold ">HomePage</h1>
            <Link to="/products">
                <Button label="Add Product" variant="default" />
            </Link>
        </div>
    );
};

export default HomePage;
