import React from "react";
import social_data from "./social_data";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import "./Social.scss";

function Social() {
	const mapped_social = social_data.map((s, n) => {
		return (
			<li className="item" key={n}>
				<a className="link" href={s.link} title={s.title}>
					<Icon className="icon" icon={s.icon} />
				</a>
			</li>
		);
	});
	return (
		<ul className="social">
			{mapped_social}
		</ul>
	)
}

export default Social;