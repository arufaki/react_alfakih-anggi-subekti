import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../components/Pages/HomePage";
import Traveling from "../components/Pages/Traveling";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chat" element={<App />} />
                <Route path="/travel" element={<Traveling />} />
            </Routes>
        </Router>
    );
};

export default Routing;
