import React, { useState } from "react";
import "./App.css";

/**
 * Create a User List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 *
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 *
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 *
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 *
 */
const randomUserURL = "https://randomuser.me/api/";

function App() {
  const [user, setUser] = useState([]);
  const settingUser = (item) => setUser([...user, item]);

  const addUser = async () => {
    await fetch(randomUserURL)
      .then((res) => res.json())
      .then((data) => settingUser(data.results));
  };
  const removeUser = (findUser) => setUser(user.filter((u) => u !== findUser));

  return (
    <div className="body">
      <div className="adduserbtn">
        <button className="newUser" onClick={addUser}>
          Add
        </button>
      </div>
      <ul className="userBody">
        {user.map((u, i) => (
          <li className="user" key={i}>
            <h1 className="userName">
              {u[0].name.title} {u[0].name.first} {u[0].name.last}
            </h1>
            <img className="userImg" src={u[0].picture.medium} alt=""></img>
            <div className="btndiv">
              <button className="removeUser" onClick={() => removeUser(u)}>
                Remove User
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
