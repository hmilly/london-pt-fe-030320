import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Mainheader from "../headers/Mainheader"
import "./wallet.css"

function Savings(props) {
    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="savingsbalance">
                    <div className="balance"><h1 className="pounds">2 230</h1><h3 className="pence">.00</h3></div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="savingsbuttons">
                <button className="in">PAY IN</button>
                <button className="out">PAY OUT</button>
                </div>
            </div>
        </>
    )
}


export default Savings

