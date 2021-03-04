import React, { useState } from 'react'

function Savings({ updateUser, user, today, ToggleDisplay, Transactions }) {

    const [savingsTransfer, setSavingsTransfer] = useState({ state: false, btnName: "", compName: "savings" })
    let userInput

    if (savingsTransfer.state) {
        userInput =
            <ToggleDisplay
                savingsTransfer={savingsTransfer}
                setUserInput={setSavingsTransfer}
                updateUser={updateUser}
                user={user}
                onClick={() => setSavingsTransfer(true)}
            />
    }

    return (
        <>
            <div className="account">
                <div className="accountsData">
                    <div className="savingsbalance">
                        <div className="balance">
                            <h1 className="pounds">{user.savingsBal === undefined
                                ? "-" : Number(user.savingsBal).toFixed(2)}</h1>
                        </div>
                        <div>
                            <p className="balanceP">Balance</p>
                        </div>
                    </div>
                    <div className="savingsbuttons">
                        <button className="in"
                            onClick={() => setSavingsTransfer({ ...savingsTransfer, state: !savingsTransfer.state, btnName: "in" })}>
                                PAY IN</button>
                        <button className="out"
                            onClick={() => setSavingsTransfer({ ...savingsTransfer, state: !savingsTransfer.state, btnName: "out" })}>
                                PAY OUT</button>
                    </div>
                </div>
                {userInput}
            </div>
            {(user.savingsBal) ? <Transactions trans={user.savingTran} today={today} /> : <></>}
        </>
    )
}

export default Savings

