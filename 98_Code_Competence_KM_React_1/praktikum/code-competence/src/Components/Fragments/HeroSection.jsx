import { heroSection } from "../../utils/staticData";
import Button from "../Elements/Button";
import Image from "../Elements/Image";

export default function HeroSection() {
    return (
        <section className="bg-[#181818] pt-[85px]">
            <div className="text-center">
                <h1 className="font-poppins text-[80px] w-[709px] mx-auto font-medium leading-[88px] tracking-[0.2] text-center text-white">{heroSection.content.head}</h1>
                <p className="font-poppins text-white text-[20px] w-[582px] mx-auto mt-[27px] mb-[90px]">{heroSection.content.paragraph}</p>
            </div>
            <div className="text-center flex flex-row justify-center gap-[35px] pb-[35px]">
                <Button label="Try For Free" variant="primary" />
                <Button label="Learn More" variant="darken" />
            </div>
            <div className="relative h-[880px] ">
                <Image src={heroSection.img.dashboard} alt="dashboard-img" className="mx-auto px-10 max-w-[1440px] w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
            </div>
        </section>
    );
}
