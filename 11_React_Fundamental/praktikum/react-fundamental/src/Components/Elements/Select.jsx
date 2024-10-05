export default function Select({ ...props }) {
    const options = [
        {
            key: "Choose...",
            value: "",
        },
        {
            key: "Bag",
            value: "bag",
        },
        {
            key: "Clothes",
            value: "clothes",
        },
        {
            key: "Jeans",
            value: "jeans",
        },
    ];

    const handleChange = (e) => {
        if (e.target.value == "") {
            alert("Kau Blm pilih lagi woi🤬");
        }
    };

    return (
        <select
            id="product"
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
            {...props}
        >
            {options.map((option, index) => (
                <option className="font-roboto" key={index} value={option.value}>
                    {option.key}
                </option>
            ))}
        </select>
    );
}
