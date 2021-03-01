import React, {useState} from "react";
import "./Minerals.scss";
/*import loading from "../assets/loading.gif";*/
import minerals_category from "./minerals_category";
import minerals_data from "./minerals_data";

function Minerals() {
	const default_category = "Tout";
	const [category, set_category] = useState(default_category);
	/*const mapped_minerals = (
		<div className="empty">
			<p className="app-text text">Loading products...</p>
			<img className="loading-image" src={loading} alt="..." />
		</div>
	);*/
	const filtered_minerals = minerals_data.filter(mineral => category === default_category || category ===mineral.category);
	let mapped_minerals = filtered_minerals.map((mineral, n) => {
		const style = {
			background: "url(" + mineral.image + ") center center no-repeat",
			backgroundSize: "cover"
		};
		return (
			<article className="item" key={n}>
				<div className="bg">
					<div className="image" style={style}></div>
				</div>
				<div className="overlay">
					<h4 className="app-title app-title-xsm title">{mineral.name}</h4>
				</div>
			</article>
		);
	});
	if(mapped_minerals.length === 0) {
		mapped_minerals = (
			<div className="empty">
				<p className="app-text text">Catégorie vide !</p>
			</div>
		);
	}
	const mapped_categories = minerals_category.map((cat, n) => {
		return (
			<option value={cat} key={n + 1}>{cat}</option>
		);
	});
	const handle_change = (e) => {
		const value = e.target.value;
		set_category(value);
	};

	return (
		<section id="products" className="minerals">
			<h2 className="app-title app-title-sm title1">Des minéraux de toutes sortes,</h2>
			<div className="separator"></div>
			<h3 className="app-title app-title-xlg title2">En provenance de Madagascar !</h3>
			<p className="app-text text">
				Pour acheter nos produits, envoyez-nous un message ou appelez-nous directement sur notre numéro. La livraison des produits peut prendre du temps selon la spécificité votre commande. Nous avons un large gamme de minéraux à vous proposer, n'hésitez pas à nous contacter pour toute information supplémentaire!
			</p>
			<div className="list">
				<div className="head">
					<p className="app-text label">Catégorie:</p>
					<select className="app-text select" value={category} onChange={handle_change}>
						<option value={default_category} key={0}>{default_category}</option>
						{mapped_categories}
					</select>
				</div>
				<div className="body">
					{mapped_minerals}
				</div>
			</div>
		</section>
	)
}

export default Minerals;