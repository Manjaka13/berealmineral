import React, {useState} from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";
import brand from "../assets/achat_de_mineraux_en_france_berealmineral.png";
import sections_data from "./sections";
import Menu from "./Menu/Menu";

function Navigation() {
	const [opened, set_opened] = useState(false);
	const mapped_sections = sections_data.map((section, n) => {
		return (
			<li className="item" key={n}>
				<a className="app-text link" href={section.anchor} title={section.title}>
					<Icon className="icon" icon={section.icon} /> {section.name}
				</a>
			</li>
		);
	});
	const open = () => {
		set_opened(true);
	};
	const close = () => {
		set_opened(false);
	};
	return (
		<nav className="navigation">
			<div className="box">
				<img className="brand" src={brand} alt="Berealmineral brand" />
				<ul className="list">
					{mapped_sections}
				</ul>
				<div className="trigger" title="Ouvrir le menu de navigation." onClick={() => open()}>
					<Icon className="icon" icon={faBars} />
				</div>
			</div>
			<Menu opened={opened} close={close} mapped_sections={mapped_sections}/>
		</nav>
	)
}

export default Navigation;