import { Link, useLocation } from "react-router-dom";
import Button from "../Elements/Button";

const DetailProduct = () => {
    const location = useLocation();
    const { name, category, image, condition, description, price } = location.state;
    return (
        <section className="h-screen flex justify-center items-center flex-col">
            <h1 className="font-bold text-[32px] font-roboto mb-4">Detail Product</h1>
            <p>Name Product : {name}</p>
            <p>Category Product : {category}</p>
            <p>Image Name : {image}</p>
            <p>Product Condition : {condition}</p>
            <p>Description Product : {description}</p>
            <p className="mb-4">Price Product : {price}</p>
            <Link to="/create-product">
                <Button variant="danger" label="Return to Create Product" />
            </Link>
        </section>
    );
};

export default DetailProduct;
