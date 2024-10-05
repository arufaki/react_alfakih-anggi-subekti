export default function HeroSection() {
    const heroData = {
        imgUrl: "./src/assets/bs-logo.png",
        imgAlt: "bs-logo",
        headerTitle: "Create Product",
        paragraphContent:
            "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    };
    return (
        <section className="max-w-[1440px] mx-auto">
            <div className="flex justify-center flex-col text-center py-12">
                <img className="w-20 mx-auto" src={heroData.imgUrl} alt={heroData.imgAlt} />
                <h1 className="font-roboto font-medium text-3xl mb-2 mt-6">{heroData.headerTitle}</h1>
                <p className="font-roboto text-xl font-light w-[62%] mx-auto text-[#212529]">{heroData.paragraphContent}</p>
            </div>
        </section>
    );
}
