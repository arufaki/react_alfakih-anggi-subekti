export default function Button({ label, type, variant, ...props }) {
    const cn = (...cns) => cns.join(" ");
    const variants = {
        darken: "font-poppins py-3 px-11 text-white text-lg border-[1px] border-[#ffffff] bg-transparent hover:bg-white hover:text-black transition duration-300",
        submit: "w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none",
        primary: "font-poppins py-3 px-11 text-white text-lg border-[1px] border-[#4452FE] bg-[#4452FE] hover:bg-white hover:text-[#4452FE] hover:border-white transition duration-300",
    };

    return (
        <button type={type} className={cn(variants[variant])} {...props}>
            {label}
        </button>
    );
}
