import "./App.css";
import styled from "styled-components";
import Header from "./Profile/Header";
import ProfileInfo from "./Profile/ProfileInfo";
import TechStack from "./Profile/TechStack";
import Project from "./Profile/Projects";
import Work from "./Profile/Work";
import Experience from "./Profile/Experience";

function App() {
	return (
		<div>
			<Banner>
				<Header />
			</Banner>
			<ProfileInfo />
			<TechStack />
			<Project />
			<Work />
			<Experience />
		</div>
	);
}

export default App;

const Banner = styled.div`
	background: #000000;
	@media (max-width: 640px) {
		height: 100%;
		padding-bottom: 2rem;
	}
`;
