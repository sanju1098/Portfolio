import React from "react";
import styled from "styled-components";

const ExpCard = (props) => {
	const {
		companyLogo,
		companyName,
		role,
		startDate,
		endDate,
		projectName,
		projectDescription,
		client = "",
		companyResponsibility,
	} = props;

	return (
		<Container>
			<CompanyDetail>
				<span>
					<p className="company-name">{companyName}</p>
					<p className="company-role">
						<i>{role}</i>
					</p>
					<p className="company-duration">
						<i>
							{startDate} - {endDate}
						</i>
					</p>
				</span>
			</CompanyDetail>
			<Responsibility>
				<ProjectDetails>
					<h3>
						<u>Project: {projectName}</u>{" "}
						{client ? `(Client: ${client})` : null}
					</h3>
					<p>{projectDescription}</p>
				</ProjectDetails>
				{/**
					{companyResponsibility.map((responsibility, index) => (
						<ul key={index}>
							<li>{responsibility}</li>
						</ul>
					))}
				*/}
			</Responsibility>
		</Container>
	);
};

export default ExpCard;

const Container = styled.div`
	width: 48%;
	border: 3px solid #009e66;
	border-radius: 15px;
	background-color: #444547;
	padding: 1.5rem;
	margin: 0.5rem;
	display: flex;
	flex-direction: column;
	@media (max-width: 840px) {
		width: 95%;
	}
`;

const CompanyDetail = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	span {
		width: 100%;
		margin: 1rem;
		@media (max-width: 840px) {
			width: 95%;
			padding: 1rem 0;
		}

		p {
			margin: 0.25rem 0;
		}
	}
`;

const Responsibility = styled.div`
	width: 98%;
	margin: 0.75rem;
	min-height: 200px;
	word-break: break-word;

	li {
		margin: 0.5rem 0;
		padding: 0.25rem;
		font-size: 16px;
		line-height: 20px;
	}
`;
const ProjectDetails = styled.div`
	flex-direction: column;
	p {
		line-height: 1.5;
		font-size: 18px;
	}
`;
