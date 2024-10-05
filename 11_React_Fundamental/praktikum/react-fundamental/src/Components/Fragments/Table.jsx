import Thead from "../Elements/Thead";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

export default function Table() {
    const dataProducts = [
        {
            name: "Sling Bag",
            category: "bag",
            image: "default.png",
            condition: "brand new",
            description: "Nice product",
            price: 4,
        },
        {
            name: "Sneakers",
            category: "footwear",
            image: "sneakers.png",
            condition: "brand new",
            description: "Comfortable sneakers for daily use",
            price: 45,
        },
        {
            name: "Wristwatch",
            category: "accessory",
            image: "watch.png",
            condition: "used",
            description: "Elegant wristwatch for formal occasions",
            price: 30,
        },
        {
            name: "Backpack",
            category: "bag",
            image: "backpack.png",
            condition: "brand new",
            description: "Spacious and stylish backpack",
            price: 25,
        },
        {
            name: "Sunglasses",
            category: "accessory",
            image: "sunglasses.png",
            condition: "brand new",
            description: "Fashionable sunglasses for sunny days",
            price: 15,
        },
    ];
    return (
        <section className="mx-auto w-[calc(100%_-_20px)] mb-64">
            <h1 className="font-medium text-3xl text-center my-2">List Product</h1>
            <Thead>
                {dataProducts.map((data, index) => (
                    <tr className={index % 2 == 0 ? "bg-gray-50 border-b hover:bg-gray-100" : "bg-white border-b hover:bg-gray-50"} key={index}>
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{data.name}</td>
                        <td className="px-6 py-4">{data.category}</td>
                        <td className="px-6 py-4">{data.image}</td>
                        <td className="px-6 py-4">{data.condition}</td>
                        <td className="px-6 py-4">{data.description}</td>
                        <td className="px-6 py-4">{data.price}</td>
                    </tr>
                ))}
            </Thead>
            <div className="flex items-start mt-4 flex-col">
                <Input type="text" className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Search by Product Name" />
                <div className="flex items-start">
                    <Button label="Deletion" variant="delete" />
                    <Button label="Search" variant="search" />
                </div>
            </div>
        </section>
    );
}
