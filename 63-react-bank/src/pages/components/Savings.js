import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"

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
            <Transactions/>
        </>
    )
}


export default Savings

