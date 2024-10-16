import Button from "../Elements/Button";
import { useState } from "react";
import { article } from "../../utils/article";

export default function HeroSection() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const { en, id } = article.title;
    const { en: descriptionEN, id: descriptionID } = article.description;
    return (
        <section className="max-w-[1440px] mx-auto relative">
            <Button variant="default" label="Swap" style={{ position: "absolute", right: "20px", top: "30px" }} onClick={handleClick} />
            <div className="flex justify-center flex-col text-center py-12">
                <img className="w-20 mx-auto" src={article.banner.img} alt={article.banner.imgAlt} />
                <h1 className="font-roboto font-medium text-3xl mb-2 mt-6">{toggle ? id : en}</h1>
                <p className="font-roboto text-xl font-light w-[62%] mx-auto text-[#212529]">{toggle ? descriptionID : descriptionEN}</p>
            </div>
        </section>
    );
}
