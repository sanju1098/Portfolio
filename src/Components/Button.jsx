import React from "react";
import "../App.css";

const Button = (props) => {
	const { redirectLink, label } = props;
	return (
		<div>
			<a href={redirectLink} target="_blank">
				<button className="project-card-btn">{label}</button>
			</a>
		</div>
	);
};

export default Button;
