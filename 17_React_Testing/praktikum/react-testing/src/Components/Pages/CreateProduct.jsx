import Header from "../Fragments/Header";
import Main from "../Layouts/Main";
import HeroSection from "../Fragments/HeroSection";
import Form from "../Fragments/Form";
import Table from "../Fragments/Table";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/productSlice";
import { addProduct } from "../../redux/actions";

export default function CreateProduct() {
    const [formData, setFormData] = useState(null);
    const dataProduct = useSelector((state) => state.products.product);
    const dispatch = useDispatch();

    const handleFormSubmit = (data) => {
        if (formData) {
            dispatch(updateProduct({ ...formData, ...data }));
            setFormData(null);
        } else {
            const newProduct = {
                ...data,
                id: formData ? formData.id : dataProduct.length > 0 ? dataProduct[dataProduct.length - 1].id + 1 : 1,
            };

            dispatch(addProduct(newProduct));
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
                <Table datas={dataProduct} onEdit={handleEdit} />
            </Main>
        </>
    );
}
