import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import HeroSection from "../Fragments/HeroSection";
import Form from "../Fragments/Form";
import Table from "../Fragments/Table";
import { useEffect, useState } from "react";
import Footer from "../Fragments/Footer";

export default function CreateProductPage() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        setFormData(JSON.parse(localStorage.getItem("formData")) || []);
    }, []);

    const handleFormSubmit = (data) => {
        const newProduct = {
            ...data,
            id: formData.length > 0 ? formData[formData.length - 1].id + 1 : 1,
        };

        setFormData((prevData) => [...prevData, newProduct]);
    };

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    return (
        <>
            <Header />
            <Main>
                <HeroSection />
                <Form onSubmit={handleFormSubmit} />
                <Table datas={formData} setDeleteData={(deleteData) => setFormData(deleteData)} />
            </Main>
            <Footer />
        </>
    );
}
