import React from "react";
import styled from "styled-components";
import { MdBusinessCenter } from "react-icons/md";

const Header = () => {
	return (
		<Container>
			<div className="navbar">
				<Logo>
					<h1>
						<MdBusinessCenter /> Portfolio
					</h1>
				</Logo>
				<div className="nav-link">
					<a href="#home">Home</a>
					<a href="#tech-stack">Technologies</a>
					<a href="#projects">Projects</a>
					<a href="#experience">Experience</a>
				</div>
			</div>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1280px;
	width: 80%;
	padding: 0.25rem 0;
	position: relative;
	animation: header 500ms ease-in-out;

	div {
		padding-bottom: 12px;
	}

	@media (max-width: 840px) {
		width: 90%;
	}
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0 10px;
`;
