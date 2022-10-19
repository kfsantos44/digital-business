import React from "react"
import react from "../assets/react.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={react} className="nav-icon"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}