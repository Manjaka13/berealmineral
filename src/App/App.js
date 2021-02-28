import React from "react";
import "./App.scss";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Advantages from "../Advantages/Advantages";
import Minerals from "../Minerals/Minerals";
import Copyright from "../Copyright/Copyright";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Cover />
			<About />
			<Advantages />
			<Minerals />
			<Copyright />
		</div>
	)
}

export default App;