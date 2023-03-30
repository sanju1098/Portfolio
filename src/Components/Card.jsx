import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = (props) => {
	const { image, title, live, gitrepo } = props;
	return (
		<Container>
			<img
				style={{ width: "90%", objectFit: "cover" }}
				src={image}
				alt={title}
			/>
			<Title>{title}</Title>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				{live && <Button redirectLink={live} label="Live Demo" />}
				{gitrepo && <Button redirectLink={gitrepo} label="GIT Repo" />}
			</div>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: 100%;
	padding: 1rem;
	margin: 1rem auto;
	text-align: center;
	h1 {
		font-size: 1.2rem;
		padding-bottom: 0.25rem;
	}
`;
const Title = styled.p`
	font-size: 1.5rem;
	padding-bottom: 0.25rem;
	}
`;
