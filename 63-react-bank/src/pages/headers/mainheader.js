import React from 'react'
import ch from "../img/CH.png"
import "./headers.css"

function Mainheader() {
    return (
        <div className="header">
            <img src={ch} alt="CH" className="ch"></img>
            <div className="txt"><p >etc</p></div>
        </div>
    )
}

export default Mainheader
