import { useState } from "react";

export default function useValidation(initialState) {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        let errorMsg = "";

        const nameRegex = /^[A-Za-z1-9\s]{1,25}$/;
        const priceRegex = /^[1-9]\d*(\.\d+)?$/;
        const imageValidation = ["image/jpeg", "image/png", "image/jpg"];

        if (name === "name" && !nameRegex.test(value)) {
            alert("Name contain alphabetic characters or must not exceed 25 characters !");
            errorMsg = "Name contain alphabetic characters or must not exceed 25 characters !";
        } else if (name === "description" && value.length < 10) {
            errorMsg = "Description must be at least 10 characters";
        } else if (name === "price" && !priceRegex.test(value)) {
            errorMsg = "Price must be greater than 0";
        } else if (name === "category" && value == "") {
            alert("Kau Blm pilih lagi woi🤬");
        } else if (name === "image") {
            const file = files[0];

            if (file) {
                if (!imageValidation.includes(file.type)) {
                    errorMsg = "No Valid image Type must be JPEG/JPG/PNG";
                } else if (file.size >= 2 * 1024 * 1024) {
                    errorMsg = "File too Big, max 2MB";
                } else {
                    setValues((prevState) => ({
                        ...prevState,
                        [name]: file.name,
                    }));

                    setError((prevErrors) => ({
                        ...prevErrors,
                        [name]: "",
                    }));
                    return;
                }
            }
        } else if (name === "condition" && !value) {
            errorMsg = "Please select Product Freshness";
        }
        setError((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));

        name !== "image" &&
            setValues((prevState) => ({
                ...prevState,
                [name]: value,
            }));
    };

    return {
        values,
        setValues,
        error,
        handleChange,
    };
}
