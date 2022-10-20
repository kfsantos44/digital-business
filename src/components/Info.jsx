import React from "react"
import imageHeader from "../assets/react-icon-large.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
    return (
        <header className="info-head">
           <img className="info-image" src={imageHeader}/>
            <h1 className="info-name">Kenneth Santos</h1>
            <h3 className="info-title">Full Stack Developer</h3>
            <h3 className="info-site">KennethSantos.website</h3>

            <div className="info-buttons">
                <button className="button-email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="button-linkedin"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
            </div>
        </header>
    )
}