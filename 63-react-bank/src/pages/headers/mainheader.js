import React from 'react'
import ch from "../img/CH.png"
import "./headers.css"
import { Link } from 'react-router-dom'

function Mainheader() {
    return (
        <div className="header">
            <div className="headImg"><img src={ch} alt="CH" className="ch"></img></div>

            <ul className="txt">
                <li>
                    <Link to="/wallet">WALLET</Link>
                </li>
                <li>
                    <Link to="/savings">SAVINGS</Link>
                </li>
                <li>
                    <Link to="/loans">LOANS</Link>
                </li>
                <li>
                    <Link>SETTINGS</Link>
                </li>
                <li>
                    <Link>SIGNOUT</Link>
                </li>
            </ul>



        </div>
    )
}

export default Mainheader
