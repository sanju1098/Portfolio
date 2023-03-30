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
		live: "",
		git: "",
	},
	{
		image: firebase,
		title: "Firebase Authentication in a React JS",
		live: "",
		git: "https://github.com/sanju1098/Firebase-Authentication",
	},
	{
		image: notes,
		title: "Simple Notes Web App",
		live: "https://notes-app-crud.netlify.app/",
		git: "https://github.com/sanju1098/Simple-Notes-App",
	},
	{
		image: weather,
		title: "Weather Application",
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
		editor: <AiOutlineCodeSandbox size="8rem" fill="#808080" />,
		title: "Code Sandbox Profile",
		description:
			"Apart from the ongoing projects, I have developed several components and written code that are stored in a CodeSandbox Profile as separate tasks. ",
		link: "https://codesandbox.io/u/Sanjay%20Kumar%20SR",
	},
	{
		editor: <FaGithub size="8rem" fill="#525252" />,
		title: "GitHub Profile",
		description:
			"Please visit my GitHub profile to check out all my projects and code works. I look forward to sharing my work with you and receiving your feedback.",
		link: "https://github.com/sanju1098",
	},
];
