import { Link } from "react-router-dom";

export default function List() {
    return (
        <ul className="hidden sm:flex items-center">
            <li className="mx-[24px] font-roboto font-medium text-[16px] text-[#ffffff] bg-[#0d6efd] px-[16px] py-[12px] rounded-[4px]">
                <Link to="/">Home</Link>
            </li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">
                <Link to="/create-product">Create Product</Link>
            </li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">
                <Link to="/pricing">Pricing</Link>
            </li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">
                <Link to="/faq">FAQs</Link>
            </li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
}
