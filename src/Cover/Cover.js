import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import "./Cover.scss";
import logo from "../assets/logo_berealmineral.png";
import Social from "../Social/Social";

function Cover() {
	return (
		<div className="cover">
			<div className="flex-container">
				<div className="box">

					<div className="left">
						<h1 className="app-title app-title-md title">Acheter des minéraux en France</h1>
						<div className="separator"></div>
						<p className="app-text text"> Berealmineral se présente comme une société fournisseur de pierres diverses pour l'Europe. Les pierres viennent de Madagascar et sont travaillés par des artisans qualifiés. Que ce soit des pierres de décoration, des pierres précieuses ou encore des Quartz, pour particulier ou à échelle industrielle, nous livrons sur toute la France !</p>
						<a className="app-text book" href="#contacts" title="Commander votre produit maintenant !">
							<Icon icon={faPencilAlt} /> Commander
						</a>
						<Social />
					</div>

					<div className="right">
						<div className="right-flex">
							<img className="logo" src={logo} alt="Logo Berealmineral" />
						</div>
					</div>

				</div>
				<p className="app-text cpy">Bertrand Rigal © 2017.</p>
			</div>
		</div>
	)
}

export default Cover;