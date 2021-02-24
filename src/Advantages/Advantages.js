import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faTruck, faThumbsUp, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import "./Advantages.scss";

function Advantages() {
	return (
		<section className="advantages">
			<div className="arrow">
				<Icon className="icon" icon={faCaretDown} />
			</div>
			<div className="left">
				<div className="box-icon">
					<Icon className="icon" icon={faTruck} />
				</div>
				<p className="app-text text">
					Nous pouvons livrer sur toute la France, à n'importe quel moment, des pierres de qualités pour professionels, particuliers et collectioneurs. Commandez dès maintenant sur notre site!
				</p>
			</div>
			<div className="right">
				<div className="box-icon">
					<Icon className="icon" icon={faThumbsUp} />
				</div>
				<p className="app-text text">
					La traçabilité de nos produits est optimum, les minéraux sont extraits de façon artisanale, tout le travail (taille, polissage, etc..) est effectué dans nos propres ateliers d’Antsirabe.
				</p>
			</div>
		</section>
	)
}

export default Advantages;