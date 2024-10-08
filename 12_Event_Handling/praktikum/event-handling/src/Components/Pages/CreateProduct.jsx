import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import HeroSection from "../Fragments/HeroSection";
import Form from "../Fragments/Form";
import Table from "../Fragments/Table";
import Button from "../Elements/Button";

export default function CreateProduct() {
    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        console.log(randomNumber);
    };

    return (
        <>
            <Header />
            <Main>
                <HeroSection />
                <Form />
                <Table />
            </Main>
            <footer className="text-center mb-14">
                <Button label="Random Number" variant="default" onClick={handleClick} />
            </footer>
        </>
    );
}
