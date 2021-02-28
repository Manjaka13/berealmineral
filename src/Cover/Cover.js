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
						<p className="app-text text">Proident tempor proident consequat dolor officia anim enim occaecat duis incididunt fugiat reprehenderit adipisicing aute do sit anim est sunt in. Proident tempor proident consequat dolor officia anim enim occaecat duis incididunt fugiat reprehenderit adipisicing aute do sit anim est sunt in.</p>
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