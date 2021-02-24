import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";
import brand from "../assets/achat_de_mineraux_en_france_berealmineral.png";
import sections_data from "./sections";

function Navigation() {
	const mapped_sections = sections_data.map((section, n) => {
		return (
			<li className="item" key={n}>
				<a className="app-text link" href={section.anchor} title={section.title}>
					<Icon className="icon" icon={section.icon} /> {section.name}
				</a>
			</li>
		);
	});
	return (
		<nav className="navigation">
			<div className="box">
				<img className="brand" src={brand} alt="Berealmineral brand" />
				<ul className="list">
					{mapped_sections}
				</ul>
				<div className="trigger" title="Ouvrir le menu de navigation.">
					<Icon className="icon" icon={faBars} />
				</div>
			</div>
		</nav>
	)
}

export default Navigation;