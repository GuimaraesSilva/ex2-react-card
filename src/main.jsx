import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 1. Criar componentes para card (React.createElement)

/* ############ FS TOP ############### */
const FsTop = React.createElement("div", { className: "fs-top" });

/* ############ AVATAR ############### */
const Img = React.createElement("img", {
	src: "https://www.fakepersongenerator.com/Face/male/male1085727541717.jpg",
	alt: "Cenas",
});
const Avatar = React.createElement("div", { className: "avatar-holder" }, Img);

/* ############ USER ############### */
const ProfileLink = React.createElement(
	"a",
	{
		href: "cenas",
		target: "_blank",
	},
	"Nerso"
);

/* ############ USER - FOLLOWERS ############### */
const FollowersIcon = React.createElement("i", {
	className: "fas fa-users",
});

const FollowersSpan = React.createElement(
	"span",
	{
		className: "followers",
	},
	90
);

const Followers = React.createElement(
	"h6",
	{
		title: "seguidores",
	},
	FollowersIcon,
	" ", // Espaço necessario para separar elementos
	FollowersSpan
);

const Name = React.createElement(
	"div",
	{ className: "name" },
	ProfileLink,
	Followers
);

/* ############ FS Info ############### */

//Criamos uma funão para reaproveitamento da criação dos elementos
function getFsInfo(type, title, description, value) {
	const InfoTitle = React.createElement(
		"h6",
		{
			title: `Numero de ${description}`,
		},
		title
	);

	const InfoValue = React.createElement("p", null, value);

	const InfoWrapper = React.createElement(
		"div",
		{
			className: `fs ${type}`,
		},
		InfoTitle,
		InfoValue
	);

	return InfoWrapper;
}

const Info = React.createElement(
	"div",
	{
		class: "fs-info",
	},
	getFsInfo(
		"components",
		"Componentes",
		"projetos componentes criados pelo user",
		10
	),
	getFsInfo("projects", "Projetos", "projetos criados pelo user", 10),
	getFsInfo("posts", "Posts", "posts", 10)
);

/* ############ Skills ############### */

const SkillsTitleIcon = React.createElement("i", {
	className: "fa fa-code",
	"aria-hidden": true,
});

const SkillsTitle = React.createElement(
	"h6",
	null,
	"Skills",
	" ",
	SkillsTitleIcon
);

function getSkillsElement(skillType, skillIcon, SkillTitleText, value) {
	const SkillIcon = React.createElement("i", {
		className: `fab ${skillIcon}`,
		"aria-hidden": true,
	});

	const SkillTitle = React.createElement(
		"h6",
		null,
		SkillIcon,
		" ",
		SkillTitleText
	);

	const SkillBar = React.createElement(
		"div",
		{
			className: `bar bar-${skillType}`,
		},
		React.createElement("p", null, value)
	);

	const SkillWrapper = React.createElement(
		"div",
		{
			className: `skill ${skillType}`,
		},
		SkillTitle,
		SkillBar
	);

	return SkillWrapper;
}

const Skills = React.createElement(
	"div",
	{
		class: "fs-skill",
	},
	SkillsTitle,
	getSkillsElement("html", "fa-html5", "HTML5", 95),
	getSkillsElement("css", "fa-css3-alt", "CSS", 90),
	getSkillsElement("javascript", "fa-js", "JavaScript", 75)
);

/* ############ Card ############### */
const Card = React.createElement(
	"div",
	{ className: "card" },
	FsTop,
	Avatar,
	Name,
	Info,
	Skills
);

// 2. Render do Card
ReactDOM.createRoot(document.getElementById("root")).render(Card);
