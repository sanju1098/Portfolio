import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import { projectContent } from "../config";

const Project = () => {
	return (
		<Container id="projects">
			<h1>
				My <span className="textColor">Projects</span>
			</h1>
			<Cards>
				{projectContent.map((project, index) => {
					return (
						<div key={index}>
							<Card
								image={project.image}
								title={project.title}
								live={project.live}
								gitrepo={project.git}
							/>
						</div>
					);
				})}
			</Cards>
		</Container>
	);
};

export default Project;

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
`;

const Cards = styled.div`
	background-color: #444547;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	gap: 1rem;
	@media (max-width: 840px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;
