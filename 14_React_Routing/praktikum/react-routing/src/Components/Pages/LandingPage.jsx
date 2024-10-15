import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import Footer from "../Fragments/Footer";
import Content from "../Fragments/Content";
import Newsletter from "../Fragments/Newsletter";
const LandingPage = () => {
    return (
        <>
            <Header />
            <Main>
                <Content />
                <Newsletter />
            </Main>
            <Footer />
        </>
    );
};

export default LandingPage;
