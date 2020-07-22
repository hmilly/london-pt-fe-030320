import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";

import LoginPage from "./pages/components/Loginpage"
import Signup from "./pages/components/Signup";
import Wallet from "./pages/components/Wallet";
import Savings from "./pages/components/Savings";
import Loans from "./pages/components/Loans";



function App() {

	const [user, setUser] = useState({})

	const updateUser = (user) => {
		setUser(user)
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
						<Wallet updateUser={updateUser} user={user} />
					</Route>
					<Route path="/savings">
						<Savings updateUser={updateUser} user={user} />
					</Route>
					<Route path="/loans">
						<Loans updateUser={updateUser} user={user} />
					</Route>
				</Switch>

			</div>
		</>
	)
}

export default App;
