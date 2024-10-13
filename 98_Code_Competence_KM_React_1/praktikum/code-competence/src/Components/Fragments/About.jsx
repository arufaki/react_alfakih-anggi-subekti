import { aboutData } from "../../utils/staticData";
import Image from "../Elements/Image";

export default function About() {
    return (
        <section className="text-center mx-auto bg-[#181818] py-[100px]">
            <div>
                <h1 className="font-poppins text-[52px] font-normal text-white text-center">{aboutData.head}</h1>
                <p className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center text-white mt-[27px] w-[582px] mx-auto pb-[80px]">{aboutData.paragraph}</p>
            </div>
            <div className="flex flex-row max-w-[1440px] mx-auto">
                <div className="ml-auto">
                    <Image src={aboutData.aboutSection} alt="dashboard-about" className="w-[752px]" />
                </div>
                <div className="mr-auto ml-4">
                    {aboutData.details.map((detail, index) => (
                        <div key={index} className="mb-9">
                            <div className="flex flex-row items-center gap-3 mb-5">
                                <Image src={detail.icon} alt="spoon-icon" className="w-[30px]" />
                                <h4 className="font-medium text-[20px] leading-[30px] tracking-[0.2px] text-white w-[153px] text-left">{detail.title}</h4>
                            </div>
                            <div className="w-[250px] text-left">
                                <p className="font-normal text-[16px] leading-[30px] tracking-[0.2px] text-white">{detail.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
