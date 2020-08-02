import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"


function Savings({ user }) {
    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="savingsbalance">
                    <div className="balance">
                        <h1 className="pounds">{user.savingsBal === undefined
                            ? "-" : Number(user.savingsBal).toFixed(2)}</h1>
                    </div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="savingsbuttons">
                    <button className="in">PAY IN</button>
                    <button className="out">PAY OUT</button>
                </div>
            </div>
            {(user.savingsBal) ? <Transactions trans={user.savingTran}/> : <></>}
        </>
    )
}


export default Savings

