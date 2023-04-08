import React from "react";
import styled from "styled-components";
import ExpCard from "../Components/ExpCard";
import { workExperienceContent } from "../config";

const Experience = () => {
	return (
		<Container id="experience">
			<h1>
				My <span className="textColor">Experience</span>
			</h1>
			<div>
				{workExperienceContent.map((workExperience, index) => {
					return (
						<ExpCard
							key={index}
							companyLogo={workExperience.companyLogo}
							companyName={workExperience.companyName}
							role={workExperience.role}
							startDate={workExperience.startDate}
							endDate={workExperience.endDate}
							projectName={workExperience.projectName}
							projectDescription={workExperience.projectDescription}
							client={workExperience.client}
							companyResponsibility={workExperience.responsibility}
						/>
					);
				})}
			</div>
		</Container>
	);
};

export default Experience;

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

		@media (max-width: 840px) {
			flex-direction: column;
		}
	}
`;
