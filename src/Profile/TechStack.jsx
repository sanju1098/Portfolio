import React from "react";
import styled from "styled-components";
import { techStackContent } from "../config";

const TechStack = () => {
	return (
		<Container id="tech-stack">
			<h1>
				My <span className="textColor">Tech Stack</span>
			</h1>
			<div style={{ backgroundColor: "#444547" }}>
				{techStackContent.map((stack, index) => {
					return (
						<div key={index}>
							<div className="tech-stack-icon-container">{stack.techIcon}</div>
							<p>{stack.techName}</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default TechStack;

const Container = styled.div`
	width: 98%;
	margin: 1rem;
	padding: 2.25rem 0;
	@media (max-width: 840px) {
		width: 90%;
		padding: 1rem 0;
	}

	h1 {
		padding-top: 1rem;
		font-size: 2.5rem;
		font-weight: 500;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 0.25rem;

		div {
			margin: 0.5rem 1rem 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 20px;
		}
		p {
			margin: 0.5rem 1rem 0;
			@media (max-width: 840px) {
				display: none;
			}
		}
	}
`;
