/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            jost: ["Jost", "system-ui"],
            openSans: ["Open Sans", "system-ui"],
            roboto: ["Roboto", "system-ui"],
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
