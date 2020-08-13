import React, { useState, useEffect } from 'react'
import users from '../API'


export default function ToggleDisplay({ setUserInput, user, updateUser, identifier }) {

    const [num, setNum] = useState(0)
console.log(identifier)
    const handleNum = (n) => {
        return +parseFloat(n).toFixed(2)
    }

    const handleSubmit = (e) => {

        if (user != undefined) {
            e.preventDefault()
            const newBalance = handleNum(user.balance -= num)

            const newSavingsBalance = handleNum(user.savingsBal += num)
            const newLoansBalance = handleNum(user.savingsBal += num)
            let newTrans = [...user.transactions, { transName: "savings", minus: num }]
            let newSavingsTrans = [...user.savingTran, { transName: "savings", plus: num }]

            updateUser({
                ...user,
                balance: newBalance,
                savingsBal: newSavingsBalance,
                transactions: newTrans,
                savingTran: newSavingsTrans
            })
        }
    }

    return (
        <div className="toggledButton" onClick={() => setUserInput(true)}>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>£</p>
                    <input type="number" min={0} step={0.01} onChange={(e) => setNum(handleNum(e.target.value))}></input>
                </div>
                <button className="toggledTrans">Transfer</button>
            </form>
        </div>
    )
}
