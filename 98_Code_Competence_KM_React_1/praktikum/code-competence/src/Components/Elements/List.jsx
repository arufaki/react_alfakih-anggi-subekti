import { Link, useLocation } from "react-router-dom";

export default function List({ scrollToContact }) {
    const location = useLocation();

    return (
        <ul className="flex flex-row gap-8 ">
            <li className="font-poppins text-base font-medium text-white cursor-pointer">
                <Link to="/">Home</Link>
            </li>
            <li className="font-poppins text-base font-medium text-white cursor-pointer">
                <Link to="/product">Product</Link>
            </li>
            <li className="font-poppins text-base font-medium text-white cursor-pointer">
                <Link to="/about">About Us</Link>
            </li>
            {location.pathname == "/" && (
                <li className="font-poppins text-base font-medium text-white cursor-pointer" onClick={scrollToContact}>
                    Contact
                </li>
            )}
        </ul>
    );
}
