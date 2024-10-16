import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import HeroSection from "../Fragments/HeroSection";
import Form from "../Fragments/Form";
import Table from "../Fragments/Table";
import Button from "../Elements/Button";
import { useState } from "react";
import useNumber from "../../customHook/useNumber";

export default function CreateProduct() {
    const { handleNumber } = useNumber(1000);

    const [formData, setFormData] = useState([]);

    const handleFormSubmit = (data) => {
        const newProduct = {
            ...data,
            id: formData.length > 0 ? formData[formData.length - 1].id + 1 : 1,
        };

        setFormData((prevData) => [...prevData, newProduct]);
        console.log(newProduct);
    };
    return (
        <>
            <Header />
            <Main>
                <HeroSection />
                <Form onSubmit={handleFormSubmit} />
                <Table datas={formData} setDeleteData={(deleteData) => setFormData(deleteData)} />
            </Main>
            <footer className="text-center mb-14">
                <Button label="Random Number" variant="default" onClick={handleNumber} />
            </footer>
        </>
    );
}
