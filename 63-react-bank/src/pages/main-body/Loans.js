import React, { useState } from 'react'
import Mainheader from "../headers/Mainheader"
import "./wallet.css"
import Transactions from "./Transactions"

function Loans(props) {
    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="loansbalance">
                    <div className="balance"><h1 className="pounds">2 230</h1><h3 className="pence">.00</h3></div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="savingsbuttons">
                <button className="in takeout">TAKE LOAN</button>
                <button className="out payback">PAY BACK</button>
                </div>
            </div>
            <Transactions/>
        </>
    )
}


export default Loans

