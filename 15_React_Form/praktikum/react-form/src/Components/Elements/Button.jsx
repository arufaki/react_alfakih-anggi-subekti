export default function Button({ label, type, variant, ...props }) {
    const cn = (...cns) => cns.join(" ");
    const variants = {
        submit: "font-roboto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full",
        delete: "px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 border border-solid border-[#0D6EFD]",
        search: "px-4 py-2 bg-white hover:bg-red-600 text-[#0D6EFD] rounded-r-lg border border-solid border-[#0D6EFD]",
        default:
            "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
        danger: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        warning: "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900",
    };

    return (
        <button type={type} className={cn(variants[variant])} {...props}>
            {label}
        </button>
    );
}
