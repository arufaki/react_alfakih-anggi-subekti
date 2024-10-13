import React from "react";
import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import Footer from "../Fragments/Footer";
import About from "../Fragments/About";

export default function AboutPage() {
    return (
        <>
            <Header />
            <Main>
                <About />
            </Main>
            <Footer />
        </>
    );
}
