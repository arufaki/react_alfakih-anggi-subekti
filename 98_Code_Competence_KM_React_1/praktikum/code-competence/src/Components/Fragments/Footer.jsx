import { footerData } from "../../utils/staticData";
import Image from "../Elements/Image";

export default function Footer() {
    return (
        <footer className="bg-[#181818] mx-auto ">
            <div className="flex flex-row justify-between max-w-[1440px] mx-auto px-[250px] pb-[107px]">
                <div className="justify-center gap-[75px] flex flex-row">
                    {footerData.headLinks.map((head, id) => (
                        <div key={id}>
                            <h3 className="text-[20px] font-medium leading-8 text-white pb-5">{head}</h3>
                            {footerData.links.map((link, index) => (
                                <p className="text-[16px] font-medium leading-5 text-white pt-5" key={index}>
                                    {link}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    <Image src={footerData.imgLogo} alt="logo" className="w-40" />
                    {footerData.identity.map((ident, id) => (
                        <div className="flex flex-row items-center gap-3 mt-3" key={id}>
                            <Image src={ident.urlIcon} />
                            <p className="font-poppins font-medium text-white text-base">{ident.content}</p>
                        </div>
                    ))}
                    <div className="flex gap-3 mt-[30px]">
                        {footerData.socmed.map((item, index) => (
                            <a href={item.url} target="_blank">
                                <Image src={item.icon} key={index} alt="icon" width="33" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
