import React, { useState, useEffect } from 'react'
import users from '../API'


export default function ToggleDisplay({setUserInput, user, updateUser}) {



    const [num, setNum] = useState(0)

    const setNumber = (n) => {
       setNum(parseFloat(n).toPrecision(4))
    }

console.log(num)

    const handleSubmit = (e) => {
        let num = parseFloat(num)
        console.log(num)
    const handleNum = (n) => {
        parseFloat(n).toFixed(2)
    }

        // if (user !== undefined){
        // e.preventDefault()
        // const newBalance = handleNum(user.balance - num)
        // const newSavingsBalance = handleNum(user.savingsBal + num)
        // const t = user.transactions
        // const newT = t.push({transName: "savings", minus: handleNum(num)})
        // const s = user.savingTran
        // const newS = s.push({transName: "savings", minus: handleNum(num)})

        // console.log(user.balance)
        // console.log(user.savingsBal)
        // console.log(user.loansBal)


        // console.log(newBalance)
        // console.log(newSavingsBalance)

        //     // updateUser({
        //     //     ...user,
        //     //     balance: newBalance,
        //     //     savingsBal: newSavingsBalance,
        //     //     transactions: t,
        //     //     savingTran: s
        //     // })
        // }
    }

    return (
        <div className="toggledButton" onClick={() => setUserInput(true)}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>£</p>
                        <input type="number" min={0} onChange={(e) => setNumber(e.target.value)}></input>
                    </div>
                <button className="toggledTrans">Transfer</button>
                </form>
            </div>
    )
}
