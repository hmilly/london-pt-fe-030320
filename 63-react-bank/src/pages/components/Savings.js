import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"


function Savings({ updateSavings, user, today }) {

    const updateBalance = (e) => {

        console.log(e)
        // if (op === "-"){
        // user.savingsBal -= num
        // updateSavings(user.savingsBal)
        // } else {
        // user.savingsBal += num
        // updateSavings(user.savingsBal)
        // }

    }

    const [toggleDisplay, setToggleDisplay] = useState(false)

    let userInput

    if (toggleDisplay) {
        userInput =
            <div className="toggledButton" onClick={() => setToggleDisplay(true)}>
                <p>£</p>
                <input></input>
                <button onClick={(e) => updateBalance(e)}>Transfer</button>
            </div>
    }

    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="savingsbalance">
                    <div className="balance">
                        <h1 className="pounds">{user.savingsBal === undefined
                            ? "-" : Number(user.savingsBal).toFixed(2)}</h1>
                    </div>
                    <div>
                        <p className="balanceP">Balance</p>
                        {userInput}
                        </div>

                </div>
                <div className="savingsbuttons">
                    <button className="in" onClick={() => setToggleDisplay(!toggleDisplay)}>PAY IN</button>
                    <button className="out">PAY OUT</button>
                </div>
            </div>
            {(user.savingsBal) ? <Transactions trans={user.savingTran} today={today} /> : <></>}
        </>
    )
}


export default Savings

