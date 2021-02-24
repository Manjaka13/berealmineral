import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "./Copyright.scss";

function Copyright() {
	const year = new Date().getFullYear();
	return (
		<div className="copyright">
			<p className="app-text text-left">
				Fait avec <Icon className="heart" icon={faHeart} /> par <a className="link" href="https://github.com/Manjaka13" title="Le développeur web du site.">Manjaka13</a>.
			</p>
			<p className="app-text text-right">
				Copyright © 2017 - {year}.
			</p>
		</div>
	)
}

export default Copyright;