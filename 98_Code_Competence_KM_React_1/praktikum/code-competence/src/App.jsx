import LandingPage from "./Components/Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import ProductPage from "./Components/Pages/ProductPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
