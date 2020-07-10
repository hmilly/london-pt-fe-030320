import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./transactions.css"

function Loans(props) {
    return (
        <>
            <div className="transactions_main">
                <div className="tran_header">
                        <p className="tran_txt">Transactions</p>
                        <p className="tran_amount">Amount</p>
                </div>
                <div className="transactions">

                <div className="transaction1">
                        <h5 className="companyname">Marks and Spencers</h5>
                        <div className="paymentinfo">
                            <img src="" alt="-"></img>
                            <h5>£7.51</h5>
                        </div>
                    </div>

                    <div className="transaction1">
                        <h5 className="companyname">Marks and Spencers</h5>
                        <div className="paymentinfo">
                            <img src="" alt="-"></img>
                            <h5>£70.51</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Loans
