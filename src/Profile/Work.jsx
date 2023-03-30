import React from "react";
import styled from "styled-components";
import { workContent } from "../config";

const Work = () => {
	return (
		<Container id="service">
			<h1>
				My <span className="textColor">Work</span>
			</h1>
			<Cards>
				{workContent.map((work, index) => {
					return (
						<CardContainer key={index}>
							<Content>
								<span>
									{work.editor}
									<h1>{work.title}</h1>
								</span>
								<p className="work-content-description">
									{work.description}
									<br />
									<a href={work.link} target="_blank">
										Check my {work.title}
									</a>
								</p>
							</Content>
						</CardContainer>
					);
				})}
			</Cards>
		</Container>
	);
};

export default Work;

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
	display: flex;
	flex-direction: row;
	gap: 1rem;
	@media (max-width: 840px) {
		flex-direction: column;
	}
`;

const CardContainer = styled.div`
	width: 100%;
	background: #1f2632;
	border: 5px solid #ffffff;
	border-radius: 15px 50px;
	padding: 0.25rem;
	h1 {
		font-size: 1.2rem;
		padding-bottom: 1rem;
	}

	p {
		font-size: 1rem;
	}
`;

const Content = styled.div`
	display: flex;
	justifycontent: "space-between";
	padding: 0.5rem 0.5rem;

	span {
		margin: 0 0.5rem;
		flex: 0.5;
	}

	p {
		word-break: break-word;
		flex: 1;
		font-size: 1.25rem;

		a {
			text-decoration: none;
			color: #03adfc;
		}
	}
`;
