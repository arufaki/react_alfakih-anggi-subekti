import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <section className="h-screen flex items-center justify-center flex-col">
            <Link to="/chat">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Chat AI Anime
                </button>
            </Link>
            <Link to={"/travel"}>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Travel Itinerary
                </button>
            </Link>
        </section>
    );
};

export default HomePage;
