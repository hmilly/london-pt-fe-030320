import React, { useState } from "react";
import "./App.css";

/**
 * 
 * Exercise:
 * 1. fetch data from the server(json-server)only if you don't
 * have contacts in state
 * 2. create input which will filter contacts on view based in user query(input value)
 * 3. render contacts
 * 
 * Contact HTML structure
 * =======================
 *	<li>
		<p>{name}</p>
		<p className={"company"}>{company}</p>
	</li>
 */

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState("");

  const contUrl =  "http://localhost:3000/contacts"

  if (contacts.length === 0) {
    fetch(contUrl)
      .then((res) => res.json())
      .then((res) => setContacts(res))
      .catch(error => console.log(error))
  }

  const handleChange = (e) => {
    setSelectedContacts(e.target.value);
  };

  const ruser =
    selectedContacts === ""
      ? contacts
      : contacts.filter((u) =>
          u.name.toLowerCase().match(selectedContacts.toLowerCase())
        );

  return (
    <div className="App">
      <div>
        <label>Filter</label>
        <input name="company" type="text" onChange={handleChange}></input>
      </div>

      <ul>
        {ruser.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p className="company">{item.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
