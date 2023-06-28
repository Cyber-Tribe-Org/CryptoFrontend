import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const isHeaderTransparent = scrollTop < 2; // Change the threshold value as needed

            setIsScrolled(!isHeaderTransparent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className={`header-nav ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-links">
                <NavLink
                    to="/"
                    className={`header-link ${isActive("/") ? "active" : ""}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={`header-link ${
                        isActive("/about") ? "active" : ""
                    }`}
                >
                    About
                </NavLink>
                <NavLink
                    to="/about"
                    className={`header-link ${
                        isActive("/about") ? "active" : ""
                    }`}
                >
                    OUR TEAM
                </NavLink>
                <NavLink
                    to="/about"
                    className={`header-link ${
                        isActive("/about") ? "active" : ""
                    }`}
                >
                    Technology
                </NavLink>
            </div>
            <div className="login-container">
                <NavLink to="/login" className="login-link">
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
