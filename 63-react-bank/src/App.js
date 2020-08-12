import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";

import LoginPage from "./pages/components/Loginpage"
import Signup from "./pages/components/Signup";
import Wallet from "./pages/components/Wallet";
import Savings from "./pages/components/Savings";
import Loans from "./pages/components/Loans";



function App() {

	const todayObj = new Date();
	let day = todayObj.getDate();
	let month = todayObj.getMonth() + 1;
	const year = todayObj.getFullYear();
	if (day < 10) { day = `0${day}` }
	if (month < 10) { month = `0${month}` }
	const today = `${day}/${month}/${year}`;

	const [user, setUser] = useState({})

	const updateUser = (user) => {
		setUser(user)
		console.log(user)
	}
	

	return (
		<>
			<div className="App">
				<Switch>
					<Route exact path="/" >
						<LoginPage updateUser={updateUser} user={user} />
					</Route>
					<Route path="/signup">
						<Signup updateUser={updateUser} user={user} />
					</Route>
					<Route path="/wallet">
						<Wallet updateUser={updateUser} user={user} today={today} />
					</Route>
					<Route path="/savings">
						<Savings updateUser={updateUser} user={user} today={today} />
					</Route>
					<Route path="/loans">
						<Loans updateUser={updateUser} user={user} today={today} />
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default App;
