import {
	FaLinkedin,
	FaGithub,
	FaInstagram,
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaGitAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui, SiMysql, SiRedux, SiStyledcomponents } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import firebase from "../assets/firebase.png";
import netflix from "../assets/netflix.png";
import notes from "../assets/notes.png";
import weather from "../assets/weather.png";
import youtube from "../assets/youtube.png";
import portfolio from "../assets/portfolio.png";
import chkdIn from "../assets/chkdInLogo.png";
import sixthCircle from "../assets/sixthCircleLogo.jpg";

export const socialMediaContent = [
	{
		icon: <FaLinkedin size="2rem" />,
		redirectURL: "https://www.linkedin.com/in/sanjay-kumar-s-r/",
	},
	{
		icon: <MdEmail size="2rem" />,
		redirectURL: "mailto:email@example.com?subject=Portfolio Mail.",
	},
	{
		icon: <FaGithub size="2rem" />,
		redirectURL: "https://github.com/sanju1098",
	},
	{
		icon: <FaInstagram size="2rem" />,
		redirectURL: "https://www.instagram.com/sanjay_._kumar___/",
	},
];
export const techStackContent = [
	{
		techIcon: <FaReact size="5rem" fill="#06BCEE" />,
		techName: "React JS",
	},
	{
		techIcon: <SiRedux size="5rem" fill="#764ABC" />,
		techName: "Redux",
	},
	{
		techIcon: <IoLogoJavascript size="5rem" fill="#F0DB4F" />,
		techName: "JavaScript",
	},
	{
		techIcon: <FaHtml5 size="5rem" fill="#F06529" />,
		techName: "HTML5",
	},
	{
		techIcon: <FaCss3Alt size="5rem" fill="#264DE4 " />,
		techName: "CSS3",
	},
	{
		techIcon: <FaSass size="5rem" fill="#BF4080" />,
		techName: "Sass",
	},
	{
		techIcon: <SiStyledcomponents size="5rem" fill="#FFD803" />,
		techName: "Styled Component",
	},
	{
		techIcon: <SiMui size="5rem" fill="#1976D2" />,
		techName: "Material UI",
	},
	{
		techIcon: <SiMysql size="5rem" fill="#F29111" />,
		techName: "MySQL",
	},
	{
		techIcon: <FaGitAlt size="5rem" fill="#F14E32" />,
		techName: "Git",
	},
];
export const projectContent = [
	{
		image: portfolio,
		title: "Portfolio",
		live: "https://sanjay-sr-portfolio.netlify.app/",
		git: "https://github.com/sanju1098/Portfolio",
	},
	{
		image: firebase,
		title: "Firebase Authentication with Google OAuth:",
		live: "",
		git: "https://github.com/sanju1098/Firebase-Authentication",
	},
	{
		image: notes,
		title: "Notes Web App",
		live: "https://notes-app-crud.netlify.app/",
		git: "https://github.com/sanju1098/Simple-Notes-App",
	},
	{
		image: weather,
		title: "A simple Weather Web App",
		live: "https://reactjs-weather-appplication.netlify.app/",
		git: "https://github.com/sanju1098/React-Weather",
	},
	{
		image: youtube,
		title: "Youtube Clone",
		live: "",
		git: "https://github.com/sanju1098/Youtube-Clone",
	},
	{
		image: netflix,
		title: "Netflix Clone",
		live: "",
		git: "https://github.com/sanju1098/react-netflix-clone",
	},
];

export const workContent = [
	{
		editor: <AiOutlineCodeSandbox size="8rem" fill="#FFFFFF" />,
		title: "Code Sandbox Profile",
		description:
			"Apart from the ongoing projects, I have developed several components and written code that are stored in a CodeSandbox Profile as separate tasks. ",
		link: "https://codesandbox.io/u/Sanjay%20Kumar%20SR",
	},
	{
		editor: <FaGithub size="8rem" fill="#FFFFFF" />,
		title: "GitHub Profile",
		description:
			"Please visit my GitHub profile to check out all my projects and code works. I look forward to sharing my work with you and receiving your feedback.",
		link: "https://github.com/sanju1098",
	},
];

export const workExperienceContent = [
	{
		companyLogo: chkdIn,
		companyName: "Harlalka Services India Pvt Ltd.",
		role: "Front End Developer",
		startDate: "October 2021",
		endDate: "Present",
		projectName: "VMware CSP Market Place",
		client: "VMware",
		projectDescription:
			"VMWare CSP Marketplace is a comprehensive online store that offers a wide range of third-party software solutions that are designed to work seamlessly with VMWare's virtualization and cloud computing products. As a one-stop-shop it provides customers with an easy and convenient way to discover, try, purchase, and deploy a variety of VMWare validated and certified ecosystem solutions, including those for VMWare Clouds, VMWare Tanzu, and VMWare vSphere.",
		responsibility: [
			"Wrote well-abstracted, efficient, reusable, and highly performant code for UI Components,optimized for fast load times and minimal network requests.",
			"Wrote code in both Functional and Class components for handling form-validation,error-handling, and validating form factors for creating a VMWare solution",
			"Handled version management, solution platform integration, and EULA agreement forsubscribing and multi-subscribing the VMware validated Solution.",
			"Wrote comprehensive unit tests using React Testing Library and Enzyme to ensure code quality and maintainability, achieving a test coverage of 85 to 100%",
			"Ensured responsiveness of the application and achieved 70% accessibility for screenreaders, adhering to WCAG 2.0 (Web Content Accessibility Guideline) standards and guidelines.",
		],
	},
	{
		companyLogo: sixthCircle,
		companyName: "Sixth Circle Technologies.",
		role: "Web Developer",
		startDate: "February 2021",
		endDate: "September 2021",
		projectName: "Custom LMAP.",
		projectDescription:
			"CustomLocal Retail Market Aggregator Platform(CustomLMAP) is a mobile application designed to provide vendors with their own customized applications for their Stores or Shop. The application has two main sections - the Mobile App and Website. The mobile app is designed for customers to log in view the products available in the store and place their orders. On the other hand, the Website is accessible to the shop manager/owner to create, update or delete products, manage inventory, categories, and offers, and check the revenue generated from the orders.",
		responsibility: [
			"Collaborated with the UI team to determine the technical requirements for the POC and helped design and implement a prototype that met the requirements.",
			"Involved in creating necessary views, serializers, and models for the Product and Order Models (Backend) using Python, Django, and Django Rest Framework.",
			"Collaboratedwith team members to Integrate the Braintree Payment Method.",
			"Developed the complete Product and Order flow for the UI from scratch",
		],
	},
];
