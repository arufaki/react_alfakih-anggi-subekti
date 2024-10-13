import Header from "../Fragments/Header";
import HeroSection from "../Fragments/HeroSection";
import Main from "../Layouts/Main";
import Contact from "../Fragments/Contact";
import Footer from "../Fragments/Footer";
import { useRef } from "react";

export default function LandingPage() {
    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <Header scrollToContact={scrollToContact} />
            <Main>
                <HeroSection />
                <Contact ref={contactRef} />
            </Main>
            <Footer />
        </>
    );
}
