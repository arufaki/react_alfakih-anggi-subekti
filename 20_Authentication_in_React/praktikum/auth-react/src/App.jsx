import CreateProduct from "./Components/Pages/CreateProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";
import ProtectedLayout from "./Components/Layouts/ProtectedLayout";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedLayout />}>
                    <Route path="/products" element={<CreateProduct />} />
                </Route>
            </Routes>
        </Router>
    );
}
