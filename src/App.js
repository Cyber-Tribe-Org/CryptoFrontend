import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage.js";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header.js";
import PageNotFound from "./components/PageNotFound.js";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
