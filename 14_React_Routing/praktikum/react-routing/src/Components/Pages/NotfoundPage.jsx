import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
    return (
        <section className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="font-bold text-[32px] mb-4">Notfound</h1>
            <Link to="/">
                <Button label="Back to Home" variant="danger" />
            </Link>
        </section>
    );
};

export default NotfoundPage;
