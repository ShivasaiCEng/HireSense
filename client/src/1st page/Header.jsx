import React, { useState } from "react";
import "./Header-Container.css";
import "./Header.css";
import "./Body-container.css";
export default function Header() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.className = newTheme; // Apply the theme to the body
    };

    return (
        <>
            <div className="Header-Container">
                <div className="Header-text">
                    <a href="#"><i className="fa-solid fa-circle-info"></i> About</a>
                    <a href="#"><i className="fa-solid fa-tag"></i> Pricing</a>
                    <a href="#"><i className="fa-solid fa-envelope"></i> Contact Us</a>
                    <a className={`theme_${theme}`} onClick={toggleTheme}>
                        <i className={`fa-regular ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
                    </a>
                </div>
            </div>
        </>
    );
}