import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import HeroSection from "../Fragments/HeroSection";
import Form from "../Fragments/Form";
import Table from "../Fragments/Table";

export default function CreateProduct() {
    return (
        <>
            <Header />
            <Main>
                <HeroSection />
                <Form />
                <Table />
            </Main>
        </>
    );
}
