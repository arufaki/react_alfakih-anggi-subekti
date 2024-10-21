import Thead from "../Elements/Thead";
import Button from "../Elements/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/productSlice";

export default function Table({ datas, onEdit }) {
    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();

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
                dispatch(deleteProduct(id));
            } else {
                console.log("batal rek");
            }
        });
    };

    return (
        <section className="mx-auto w-[calc(100%_-_20px)] mb-64">
            <h1 className="font-medium text-3xl text-center my-2">List Product</h1>
            <Thead>
                {datas.map((data, index) => (
                    <tr className={index % 2 == 0 ? "bg-gray-50 border-b hover:bg-gray-100" : "bg-white border-b hover:bg-gray-50"} key={index}>
                        <td className="px-6 py-4">{data.id}</td>
                        <td className="px-6 py-4">{data.name}</td>
                        <td className="px-6 py-4">{data.category}</td>
                        <td className="px-6 py-4">{data.image}</td>
                        <td className="px-6 py-4">{data.condition}</td>
                        <td className="px-6 py-4">{data.description}</td>
                        <td className="px-6 py-4">{data.price}</td>
                        <td className="px-6 py-4">
                            <Button label="Edit" variant="warning" onClick={() => onEdit(data)} />
                            <Button label="Delete" variant="danger" onClick={() => handleClick(data.id)} />
                        </td>
                    </tr>
                ))}
            </Thead>
        </section>
    );
}
