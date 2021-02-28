import React from "react";
import "./Menu.scss";

function Menu({opened, close, mapped_sections}) {
	const style_overlay = opened ? "menu-overlay" : "menu-overlay-closed";
	const style_menu = opened ? "menu" : "menu-closed";
	return (
		<div onClick={() => close()}>
			<div className={style_overlay}></div>
			<div className={style_menu}>
				<h2 className="app-title app-title-xlg title">Menu</h2>
				<div className="separator"></div>
				<ul className="list">
					{mapped_sections}
				</ul>
			</div>
		</div>
	)
}

export default Menu;