import React from "react";
import "./App.scss";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Advantages from "../Advantages/Advantages";
import Copyright from "../Copyright/Copyright";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Cover />
			<About />
			<Advantages />
			<Copyright />
		</div>
	)
}

export default App;