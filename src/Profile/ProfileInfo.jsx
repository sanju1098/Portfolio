import React from "react";
import styled from "styled-components";
import Resume from "../assets/Resume.pdf";
import { socialMediaContent } from "../config";

const ProfComponent = () => {
	return (
		<Container id="home">
			<Texts>
				<h2>
					Hello <span className="textColor">I'am</span>
				</h2>
				<h1 className="textColor">Sanjay Kumar S R</h1>
				<h3>Frontend Developer || React JS Developer</h3>

				<p>
					A Frontend Developer with 2+ Years of Experience.
					<br />
					Have a solid understanding of Web Development Technologies and best
					practices, including HTML, CSS, JavaScript and React JS.
					<br />
					Experienced in building Responsive and Dynamic Web Applications,
					Optimizing Website Performance and Debugging code issues.
				</p>

				<a href={Resume} download="Sanjay Kumar-Resume" target="_blank">
					<button>Download my RESUME</button>
				</a>

				<Social>
					<div className="social-icons">
						{socialMediaContent.map((social, index) => {
							return (
								<span key={index}>
									<a href={social.redirectURL} target="_blank">
										{social.icon}
									</a>
								</span>
							);
						})}
					</div>
				</Social>
			</Texts>
		</Container>
	);
};

export default ProfComponent;

const Container = styled.div`
	display: flex;
	gap: 2rem;
	padding-top: 5rem;
	width: 80%;
	max-width: 1280px;
	margin: 3rem 2rem 0rem 2rem;
	z-index: 1;

	@media (max-width: 840px) {
		width: 90%;
	}

	@media (max-width: 640px) {
		flex-direction: column;
		padding-top: 1rem;
	}
`;
const Texts = styled.div`
	flex: 1;

	h1 {
		font-size: 3.5rem;
		letter-spacing: 2px;
	}

	h2 {
		font-size: 2.5rem;
		padding: 1rem 0;
		font-weight: 500;
	}

	h3 {
		font-weight: 500;
		font-size: 1.75rem;
		padding-bottom: 2rem;
		text-transform: capitalize;
	}

	p {
		font-weight: 300;
		line-height: 1.75rem;
		letter-spacing: 0.75px;
		font-size: 1rem;
	}

	button {
		padding: 0.7rem 2rem;
		margin-top: 3rem;
		cursor: pointer;
		background-color: #009e66;
		color: #ffffff;
		font-weight: 500;
		font-family: "Montserrat", sans-serif;
		font-size: 18px;
		:hover {
			filter: drop-shadow(0px 5px 5px #009e66);
		}
	}
`;
const Social = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;

	.social-icons {
		display: flex;
		gap: 1rem;

		span {
			width: 3rem;
			height: 3rem;
			position: relative;
			:hover {
				background-color: #009e66;
				border-radius: 50%;
			}
		}

		a {
			color: #ffffff;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		a:hover {
		}
	}
`;
