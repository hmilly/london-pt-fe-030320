import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"


function Loans({ user, today }) {
    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="loansbalance">
                    <div className="balance">
                        <h1 className="pounds">{user.loansBal === undefined
                            ? "-" : Number(user.loansBal).toFixed(2)}</h1>
                    </div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="savingsbuttons">
                    <button className="in takeout">TAKE LOAN</button>
                    <button className="out payback">PAY BACK</button>
                </div>
            </div>
            {(user.loansBal) ? <Transactions trans={user.loansTran} today={today} /> : <></>}
        </>
    )
}


export default Loans

