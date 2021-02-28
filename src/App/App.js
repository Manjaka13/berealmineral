import React from "react";
import "./App.scss";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Advantages from "../Advantages/Advantages";
import Minerals from "../Minerals/Minerals";
import Contacts from "../Contacts/Contacts";
import Copyright from "../Copyright/Copyright";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Cover />
			<About />
			<Advantages />
			<Minerals />
			<Contacts />
			<Copyright />
		</div>
	)
}

export default App;