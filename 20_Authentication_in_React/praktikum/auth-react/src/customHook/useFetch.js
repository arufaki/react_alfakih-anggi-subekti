import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useFetch = (url) => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(url);
                setDatas(response.data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [url]);

    const post = async (newData) => {
        try {
            const response = await axios.post(url, newData);
            setDatas((prevData) => [...prevData, response.data]);
            MySwal.fire({
                title: "Success!",
                text: "Data berhasil disimpan !",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const update = async (id, updateData) => {
        try {
            const response = await axios.put(`${url}/${id}`, updateData);
            setDatas((prevData) => prevData.map((item) => (item.id === id ? response.data : item)));

            MySwal.fire({
                title: "Success!",
                text: "Data berhasil di update !",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const deleteData = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
            setDatas((prevData) => prevData.filter((item) => item.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return { datas, loading, post, update, deleteData };
};

export default useFetch;
