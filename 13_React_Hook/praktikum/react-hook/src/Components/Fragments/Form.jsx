import Label from "../Elements/Label";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
import Textarea from "../Elements/Textarea";
import Button from "../Elements/Button";
import { dataRadio } from "../../utils/radio";
import useValidation from "../../customHook/useValidation";

export default function Form({ onSubmit }) {
    const initialState = {
        id: null,
        name: "",
        category: "",
        image: "default.jpg",
        condition: "",
        description: "",
        price: "",
    };

    const { error, handleChange, values, setValues } = useValidation(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        const productName = e.target.name.value.trim();
        const description = e.target.description.value.trim();
        const price = e.target.price.value;

        if (!productName || productName.length > 25) {
            alert("Please enter a valid product name.");
        } else if (!description || description.length < 10) {
            alert("Please enter a valid description.");
        } else if (!price || price <= 0) {
            alert("Price must be greater than 0");
        } else {
            onSubmit(values);
            setValues(initialState);
        }
    };

    return (
        <section className="flex flex-wrap items-center justify-center flex-col">
            <form className="group w-[600px]" onSubmit={handleSubmit}>
                <h2 className="font-roboto font-medium text-2xl mb-4 text-[#212529]">Detail Product</h2>
                <div className="product-name test mb-9 w-[300px]">
                    <Label labelName="Product Name :" htmlFor="name" />
                    <Input
                        type="text"
                        name="name"
                        value={values.name}
                        className={`border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400   mt-3 focus:outline-none ${
                            error.name ? "border-red-500 active:border-red-500 active:ring-red-500" : "focus:border-blue-500"
                        }`}
                        onChange={handleChange}
                        required
                    />
                    {error.name && <p className="mt-2 font-roboto text-sm text-red-500">{error.name}</p>}
                </div>
                <div className="product-category test mb-9 w-[224px]">
                    <Label labelName="Product Category" htmlFor="category" />
                    <Select name="category" value={values.category} onChange={handleChange} />
                </div>
                <div className="product-image test mb-9 w-[202px]">
                    <Label labelName="Image of Product" htmlFor="image" />
                    <Input
                        type="file"
                        name="image"
                        className="block w-full mb-5 text-xs text-[#0D6EFD] border border-[#0D6EFD] rounded-lg cursor-pointer bg-gray-50 file:text-white focus:outline-none file:border-[#0D6EFD] file:placeholder-white file:py-2 file:px-3 file:bg-[#0D6EFD] file:text-sm"
                    />
                </div>
                <div className="product-freshness test mb-4">
                    <Label labelName="Product Freshness" htmlFor="new" />
                    <br />
                    {dataRadio.map((data, index) => (
                        <div key={index}>
                            <Input type="radio" id={data.id} value={data.value} name={data.name} className="mr-1" onChange={handleChange} />
                            <Label htmlFor={data.id} labelName={data.title} />
                            <br />
                        </div>
                    ))}
                </div>
                <div className="product-description test mb-8">
                    <Label htmlFor="description" labelName="Additional Description" />
                    <Textarea
                        id="description"
                        name="description"
                        rows="4"
                        value={values.description}
                        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300dark:placeholder-gray-400 dark:text-black focus:outline-none ${
                            error.description ? "border-red-500 active:border-red-500 active:ring-red-500" : "focus:border-blue-500"
                        }`}
                        onChange={handleChange}
                        required
                    />
                    {error.description && <p className="mt-2 font-roboto text-sm text-red-500">{error.description}</p>}
                </div>
                <div className="product-price test mb-9">
                    <Label htmlFor="price" labelName="Product Price" />
                    <br />
                    <Input
                        id="price"
                        type="number"
                        name="price"
                        value={values.price}
                        aria-describedby="helper-text-explanation"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 dark:text-black focus:outline-none ${
                            error.price ? "border-red-500 active:border-red-500 active:ring-red-500" : "focus:border-blue-500"
                        }`}
                        placeholder="$ 1"
                        onChange={handleChange}
                        required
                    />
                    {error.price && <p className="mt-2 font-roboto text-sm text-red-500">{error.price}</p>}
                </div>
                <Button type="submit" label="Submit" variant="submit" />
            </form>
        </section>
    );
}
