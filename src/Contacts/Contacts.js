import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import madagascar from "../assets/madagascar_berealmineral.jpg";
import france from "../assets/france_berealmineral.jpg";
import "./Contacts.scss";

function Contacts() {
	return (
		<React.Fragment>
		<section id="contacts" className="contacts">
			<h2 className="app-title app-title-sm title1">Passez commande</h2>
			<div className="separator"></div>
			<h3 className="app-title app-title-xlg title2">Contactez-nous maintenant !</h3>
			<p className="app-text text">
				Nos contacts directs sont en bas de page, si vous souhaitez nous envoyer un message utilisez le formulaire ci-dessous. Pour toute question ou information supplémentaire nous concernant ou sur nos produits et notre méthode de travail, n'hésitez pas à nous demander :)
			</p>
			<form className="form">
				<input className="app-text name" type="text" placeholder="Votre nom" />
				<input className="app-text email" type="email" placeholder="Votre adresse e-mail" />
				<textarea className="app-text message" placeholder="Votre message"></textarea>
				<button className="app-text submit"><Icon icon={faPaperPlane} /> Envoyer</button>
			</form>
		</section>
		<div className="contacts-details">
			<div className="contacts-icon">
				<Icon className="icon" icon={faEnvelope} />
			</div>
			<div className="left">
				<div className="head">
					<img className="flag" src={madagascar} alt="Drapeau Madagascar" />
					<h2 className="app-title app-title-md title">Madagascar</h2>
				</div>
				<div className="separator"></div>
				<ul className="list">
					<li className="app-text item">Bertrand Rigal</li>
					<li className="app-text item">+261 33 46 869 13</li>
					<li className="app-text item">mada@berealmineral.com</li>
				</ul>
			</div>
			<div className="sep"></div>
			<div className="right">
				<div className="head">
					<img className="flag" src={france} alt="Drapeau France" />
					<h2 className="app-title app-title-md title">France</h2>
				</div>
				<div className="separator"></div>
				<ul className="list">
					<li className="app-text item">Bertrand Rigal</li>
					<li className="app-text item">+33 07 864 667 81</li>
					<li className="app-text item">nicofavard@gmail.com</li>
				</ul>
			</div>
		</div>
		</React.Fragment>
	);
}

export default Contacts;