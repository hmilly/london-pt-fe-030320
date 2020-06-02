import React from "react";
import "./App.css";

import Header from "./Header.css";
import Nav from "./Nav.css";
import Content from "./Content.css";
import Form from "./Form.css";
import Footer from  "./Footer.css";




/**
 * Exercises:
 *
 * 1. Create a Navigation component, import and use it here.
 * 2. Create a Header component, import and use it here.
 * 3. Create a Form component, import and use it here.
 * 4. Create a Content component, import and use it here.
 * 5. Create a Footer component, import and use it here.
 *
 * NOTE: Layout for each component is up to you.
 */

function App() {
	return <div className="App">
	<Header />
	<Nav />
	<Content />
	<Form />
	<Footer />
	</div>
}
export default App;

