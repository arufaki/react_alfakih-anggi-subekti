import { useState } from "react";

export default function useValidation(initialState) {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        let errorMsg = "";

        if (name === "name" && value.length > 25) {
            alert("Last Name must not exceed 25 characters");
            errorMsg = "Maximum 25 characters !";
        } else if (name === "description" && value.length < 10) {
            errorMsg = "Description must be at least 10 characters";
        } else if (name === "price" && value <= 0) {
            errorMsg = "Price must be greater than 0";
        } else if (name === "category" && value == "") {
            alert("Kau Blm pilih lagi woi🤬");
        }

        setError((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));

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
