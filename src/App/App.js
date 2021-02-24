import React from "react";
import "./App.scss";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import Copyright from "../Copyright/Copyright";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Cover />
			<Copyright />
		</div>
	)
}

export default App;