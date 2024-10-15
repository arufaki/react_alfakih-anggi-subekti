import CreateProductPage from "./Components/Pages/CreateProductPage";
import LandingPage from "./Components/Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotfoundPage from "./Components/Pages/NotfoundPage";
import ProductPage from "./Components/Pages/ProductPage";
import { useEffect, useState } from "react";
import LoginPage from "./Components/Pages/LoginPage";

const App = () => {
    const [isLogin, setLogin] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/product/:id" element={isLogin ? <ProductPage /> : <NotfoundPage />} />
                <Route path="/login" element={<LoginPage setIsLogin={setLogin} />} />
                <Route path="*" element={<NotfoundPage />} />
                <Route path="/create-product" element={isLogin ? <CreateProductPage /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
