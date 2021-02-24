import React from "react";
import "./App.scss";
import Navigation from "../Navigation/Navigation";
import Copyright from "../Copyright/Copyright";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Copyright />
		</div>
	)
}

export default App;