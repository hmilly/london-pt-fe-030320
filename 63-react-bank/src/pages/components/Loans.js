import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"



function Loans({user}) {
    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="loansbalance">
                    <div className="balance">
                        <h1 className="pounds">{user.loansBal}</h1>
                        {/* <h3 className="pence">.00</h3> */}
                    </div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="savingsbuttons">
                    <button className="in takeout">TAKE LOAN</button>
                    <button className="out payback">PAY BACK</button>
                </div>
            </div>

        </>
    )
}


export default Loans

