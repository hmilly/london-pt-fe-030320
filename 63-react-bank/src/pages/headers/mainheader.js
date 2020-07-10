import React from 'react'
import ch from "../img/CH.png"
import "./headers.css"
import { Switch, Route } from 'react-router-dom'

function Mainheader() {
    return (
        <div className="header">
            <img src={ch} alt="CH" className="ch"></img>
            <div className="txt"><p >WALLET</p><p >SAVINGS</p><p >LOANS</p><p >SETTINGS</p><p >SIGN OUT</p>


                <Switch>
                    <Route>
                        
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Mainheader
