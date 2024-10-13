import List from "../Elements/List";
import Image from "../Elements/Image";
import { headerData } from "../../utils/staticData";
import Button from "../Elements/Button";

export default function Header({ scrollToContact }) {
    return (
        <header className="bg-[#181818] ">
            <nav className="flex flex-row justify-between  mx-auto items-center px-8 py-8 max-w-[1580px] w-[calc(100%_-_116px)]">
                <Image src={headerData.img.url} alt={headerData.img.alt} className="w-28 cursor-pointer" />
                <List scrollToContact={scrollToContact} />
                <Button label="Login" variant="darken" />
            </nav>
        </header>
    );
}
