import Thead from "../Elements/Thead";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

export default function Table({ datas, setDeleteData }) {
    const MySwal = withReactContent(Swal);

    const handleClick = (id) => {
        MySwal.fire({
            title: "Are you sure want delete this data?",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteLastData = datas.filter((item) => item.id !== id);
                setDeleteData(deleteLastData);
            } else {
                console.log("batal rek");
            }
        });
    };

    return (
        <section className="mx-auto w-[calc(100%_-_20px)] mb-64 container">
            <h1 className="font-medium text-3xl text-center my-2 h-full">List Product</h1>
            <Thead>
                {datas.map((data, index) => (
                    <tr className={index % 2 == 0 ? "bg-gray-50 border-b hover:bg-gray-100" : "bg-white border-b hover:bg-gray-50"} key={index}>
                        <td className="px-6 py-4">
                            <Link to={`/product/${data.id}`} state={data}>
                                {data.id}
                            </Link>
                        </td>
                        <td className="px-6 py-4">{data.name}</td>
                        <td className="px-6 py-4">{data.category}</td>
                        <td className="px-6 py-4">{data.image}</td>
                        <td className="px-6 py-4">{data.condition}</td>
                        <td className="px-6 py-4">{data.description}</td>
                        <td className="px-6 py-4">{data.price}</td>
                        <td className="px-6 py-4">
                            <Button label="Edit" variant="warning" />
                            <Button label="Delete" variant="danger" onClick={() => handleClick(data.id)} />
                        </td>
                    </tr>
                ))}
            </Thead>
            {/* <div className="flex items-start mt-4 flex-col">
                <Input type="text" className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Search by Product Name" />
                <div className="flex items-start">
                    <Button label="Deletion" variant="delete" onClick={handleClick} />
                    <Button label="Search" variant="search" />
                </div>
            </div> */}
        </section>
    );
}
