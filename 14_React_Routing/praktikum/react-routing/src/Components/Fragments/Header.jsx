import Logo from "../Elements/Logo";
import List from "../Elements/List";
import Hamburger from "../Elements/Hamburger";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow-lg">
            <nav className="flex justify-between items-center py-[15px] max-w-[1440px] mx-auto w-[calc(100%_-_20px)]">
                <Link to="/">
                    <Logo logoTitle="Simple Header" />
                </Link>
                <List />
                <Hamburger />
            </nav>
        </header>
    );
}
