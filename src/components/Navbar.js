import React from "react"
import ReactIcon from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={ReactIcon} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">First React Project</h4>
        </nav>
    )
}