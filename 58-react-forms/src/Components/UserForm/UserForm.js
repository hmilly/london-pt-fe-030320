import React, { useState } from "react";

/*
 * Exercise 2
 * 1. Create component UserForm.
 * 2. UserForm needs to have state {user} with properties:
 * 	- firstName, - lastName, - age, - gender.
 * 3. UserForm should contain 4 inputs:
 * - firstName(type: "text", class: firstName)
 * - lastName(type: "text", class: lastName)
 * - age(type: "number", class: age)
 * - gender(type="select" class: gender,)
 * 4. When the value of any input changes, user state needs to reflect that.
 * 5. On form submit post your user to database. Validate data.
 * If any value is missing, you shouldn't post user to database.
 *
 * IMPORTANT: create div with class "state" and render there
 * all properties from {user} state.
 */

const dbUrl = "http://localhost:3000/users"

const postUser = async (newUser) => {
  const configObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(newUser),
  };

  return await fetch(dbUrl, configObject)
      .then(res => (res.ok) ? res.json() : "Oops something went wrong!").catch(error => console.log(error))
}



const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.firstName && user.lastName && user.gender !== "" ){
      postUser(user);
    }
    

    setUser({
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
    });
  };

  return (
    <div className="state">
      <form onSubmit={handleSubmit} className="userForm">
        <input
          className="firstName"
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        ></input>
        <input
          className="lastName"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        ></input>
        <input
          className="age"
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          required
          min="0"
          max="120"
        ></input>
        <select
          className="gender"
          type="select"
          name="gender"
          placeholder="Gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option>Please choose an option</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">other</option>
        </select>
        <button type="submit" onSubmit={handleSubmit}> Submit </button>
      </form>
    </div>
  );
};

export default UserForm;
