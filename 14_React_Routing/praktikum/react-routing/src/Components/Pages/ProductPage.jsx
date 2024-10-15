import { useLocation } from "react-router-dom";
import Header from "../Fragments/Header";
import Footer from "../Fragments/Footer";
import Main from "../Layouts/Main";
import DetailProduct from "../Fragments/DetailProduct";

const ProductPage = () => {
    const location = useLocation();

    const { name } = location.state;

    return (
        <>
            <Header />
            <Main>
                <DetailProduct />
            </Main>
            <Footer />
        </>
    );
};

export default ProductPage;
