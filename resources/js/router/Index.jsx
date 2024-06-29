import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default Index;
