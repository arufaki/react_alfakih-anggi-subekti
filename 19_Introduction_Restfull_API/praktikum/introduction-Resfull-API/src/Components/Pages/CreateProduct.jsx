import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import HeroSection from "../Fragments/HeroSection";
import Form from "../Fragments/Form";
import Table from "../Fragments/Table";
import { useState } from "react";
import useFetch from "../../customHook/useFetch";

export default function CreateProduct() {
    const [formData, setFormData] = useState(null);

    const { datas, post, update, deleteData, loading } = useFetch("https://6718b0dc7fc4c5ff8f4a95d6.mockapi.io/products");

    const handleFormSubmit = (data) => {
        if (formData) {
            update(data.id, { ...formData, ...data });
        } else {
            post(data);
        }
    };

    const handleEdit = (product) => {
        setFormData(product);
    };

    return (
        <>
            <Header />
            <Main>
                <HeroSection />
                <Form onSubmit={handleFormSubmit} initialData={formData} />
                <Table onEdit={handleEdit} datas={datas} deleteData={deleteData} loading={loading} />
            </Main>
        </>
    );
}
