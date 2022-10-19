import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
            <button className="footer-button-twitter"><FontAwesomeIcon icon={faTwitterSquare} /></button>
            <button className="footer-button-facebook"><FontAwesomeIcon icon={faFacebookSquare} /></button>
            <button className="footer-button-instagram"><FontAwesomeIcon icon={faInstagramSquare} /></button>
            <button className="footer-button-github"><FontAwesomeIcon icon={faGithubSquare} /></button>
        </footer>
    )
}