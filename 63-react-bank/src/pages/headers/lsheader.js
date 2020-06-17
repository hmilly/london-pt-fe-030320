import React from 'react'
import ch from "../img/CH.png"
import "./headers.css"

function Lsheader() {
    return (
        <div className="header">
            <img src={ch} alt="CH" className="ch"></img>
            <div className="txt"><p >LOGIN / SIGN UP</p></div>
        </div>
    )
}

export default Lsheader
