import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ch from "../img/CH.png"

function Mainheader({Settings}) {

    const [showMenu, setShowMenu] = useState(false)
    let menu;
    if (showMenu) {
        menu = <Settings setMenu={setShowMenu} onClick={() => setShowMenu(true)} />
    }

    return (
        <>
            <div className="header">
                <div className="headImg">
                    <img src={ch} alt="CH" className="ch"></img>
                </div>
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
                        <button onClick={() => setShowMenu(!showMenu)} >SETTINGS</button>
                    </li>
                    <li>
                        <Link to="/">SIGN OUT</Link>
                    </li>
                </ul>
            </div>
            {menu}
        </>
    )
}

export default Mainheader
