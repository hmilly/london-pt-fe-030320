import React from 'react'
import ch from "../img/CH.png"
import "../styles/headers.css"

function Lsheader() {
    return (
        <div className="header">
            <div>
                <img src={ch} alt="CH" className="ch"></img>
                </div>
            <div className="txt"><p>LOGIN / SIGN UP</p></div>
        </div>
    )
}

export default Lsheader
