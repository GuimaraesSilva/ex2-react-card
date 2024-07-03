import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const card = React.createElement("div", {className: "card",},
    React.createElement("div", {className: "fs-top"}),
    React.createElement("div", {className: "avatar-holder"},
        React.createElement("img",{src: "https://www.fakepersongenerator.com/Face/male/male1085727541717.jpg", alt: "alt de imagem"}),),
    React.createElement("div", {className: "name"},
        React.createElement("a", {href: "link para o perfil", target: "_blank"}, "Edward H Thomas"),
        React.createElement("h6", {title: "Seguidores"},
            React.createElement("i", {className: "fa fa-user"}),
            React.createElement("span", {className: "followers"}, "90"),),),
    React.createElement("div", {className: "fs-info"},
        React.createElement("div", {className: "components"},
            React.createElement("h6", {title: "Numero de componentes criados pelo user"}, "Componentes"),
            React.createElement("p", {}, "29"),),
        React.createElement("div", {className: "fs-projects"},
            React.createElement("h6", {title: "Numero de projectos criados pelo user"}, "Projectos"),
            React.createElement("p", {}, "10"),),
        React.createElement("div", {className: "fs-posts"},
                React.createElement("h6", {title: "Numero de posts"}, "Posts"),
                React.createElement("p", {}, "5"),),),
    React.createElement("div", {className: "fs-skill"},
        React.createElement("h6", {}, "Skills",
            React.createElement("i", {className: "fa fa-code", "aria-hidden": "true"}),),
        React.createElement("div", {className: "skill html"},
            React.createElement("h6", {}, "",
                React.createElement("i", {className: "fab fa-html5"}, "HTML5"),),
            React.createElement("div", {className: "bar bar-html"},
                React.createElement("p", {}, "95%"),),),
        React.createElement("div", {className: "skill css"},
            React.createElement("h6", {}, "",
                React.createElement("i", {className: "fab fa-css3-alt"}, "CSS3"),),
            React.createElement("div", {className: "bar bar-css"},
                React.createElement("p", {}, "90%"),),),
        React.createElement("div", {className: "skill javascript"},
            React.createElement("h6", {}, "",
                React.createElement("i", {className: "fab fa-js"}, "JavaScript"),),
                React.createElement("div", {className: "bar bar-js"},
                    React.createElement("p", {}, "75%"),),),),)

// 2. Render do Card
ReactDOM.createRoot(document.getElementById("root")).render(card);
