import React, { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";

/**
 * Exercise
 * 1. fetch data and store it in {users} state.
 * 2. Pass user data as {user} prop for UserCard component and render all users.
 * 3. In UserCard component, render user name, and user email.
 * Inside UserCard add class "card" to wrapper.
 *
 * NOTE: DB url - http://localhost:3000/contacts
 */

let dbUrl = "http://localhost:3000/contacts";

const App = () => {
    const [users, setUsers] = useState([]);

    if (users.length === 0) {
        fetch(dbUrl)
            .then((res) => res.json())
            .then((res) =>
                setUsers(res)
            );
    }

    return (
        <div className="app"> {
            users.map((user, i) => (
                <UserCard user={user} key={i} />
            ))}
        </div>)

};

export default App;