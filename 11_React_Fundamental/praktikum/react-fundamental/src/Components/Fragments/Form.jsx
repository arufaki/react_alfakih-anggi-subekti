import Label from "../Elements/Label";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
import Textarea from "../Elements/Textarea";
import Button from "../Elements/Button";

export default function Form() {
    const dataRadio = [
        {
            id: "new",
            title: "Brand New",
            value: "brand new",
            name: "product-freshness",
        },
        {
            id: "second",
            title: "Second Hand",
            value: "second hand",
            name: "product-freshness",
        },
        {
            id: "refurbish",
            title: "Refurbished",
            value: "refurbished",
            name: "product-freshness",
        },
    ];

    return (
        <section className="flex flex-wrap items-center justify-center flex-col">
            <form className="group w-[600px]">
                <h2 className="font-roboto font-medium text-2xl mb-4 text-[#212529]">Detail Product</h2>
                <div className="product-name test mb-9 w-[300px]">
                    <Label labelName="Product Name :" htmlFor="name" />
                    <Input
                        type="text"
                        name="name"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                        pattern="^[a-zA-Z0-9._\s]{10,50}$"
                        required
                    />
                    <span className="mt-2 font-roboto hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"> Must be min 10 - 50 characters </span>
                </div>
                <div className="product-category test mb-9 w-[224px]">
                    <Label labelName="Product Category" htmlFor="category" />
                    <Select name="category" />
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
                            <Input type="radio" id={data.id} value={data.value} name={data.name} className="mr-1" />
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
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="product-price test mb-9">
                    <Label htmlFor="price" labelName="Product Price" />
                    <br />
                    <Input
                        id="price"
                        type="number"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="$ 1"
                        required
                    />
                </div>
                <Button type="submit" label="Submit" variant="submit" />
            </form>
        </section>
    );
}
