export default function Button({ label, type, variant }) {
    const cn = (...cns) => cns.join(" ");
    const variants = {
        submit: "font-roboto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full",
        delete: "px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 border border-solid border-[#0D6EFD]",
        search: "px-4 py-2 bg-white hover:bg-red-600 text-[#0D6EFD] rounded-r-lg border border-solid border-[#0D6EFD]",
    };

    return (
        <button type={type} className={cn(variants[variant])}>
            {label}
        </button>
    );
}
