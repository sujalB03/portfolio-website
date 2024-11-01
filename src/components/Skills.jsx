import React from "react";
import htmlIcon from "../assets/Skills/html.png";
import cssIcon from "../assets/Skills/css.png";
import jsIcon from "../assets/Skills/js.png";
import bootstrapIcon from "../assets/Skills/bootstrap.png";
import jqueryIcon from "../assets/Skills/jquery2.png";
import phpIcon from "../assets/Skills/php.png";
import wordpressIcon from "../assets/Skills/wordpress.png";
import nodejsIcon from "../assets/Skills/nodejs.png";
import npmIcon from "../assets/Skills/npm.png";
import expressIcon from "../assets/Skills/express.png";
import gitIcon from "../assets/Skills/git.png";
import githubIcon from "../assets/Skills/github.png";
import mysqlIcon from "../assets/Skills/mysql.png";
import reactIcon from "../assets/Skills/reactjs.png";
function Skills() {
  const skills = [
    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "JavaScript", image: jsIcon },
    { name: "Bootstrap", image: bootstrapIcon },
    { name: "jQuery", image: jqueryIcon },
    { name: "PHP", image: phpIcon },
    { name: "WordPress", image: wordpressIcon },
    { name: "Node.js", image: nodejsIcon },
    { name: "Express", image: expressIcon },
    { name: "NPM", image: npmIcon },
    { name: "Git", image: gitIcon },
    { name: "Github", image: githubIcon },
    { name: "MySQL", image: mysqlIcon },
    { name: "React.js", image: reactIcon },
  ];

  return (
    <section
      className="skills"
      data-aos="fade-left"
      data-aos-duration="4000"
      id="skills"
    >
      <h1 className="heading fadeInUp">
        <span>S</span>kills
      </h1>

      <div className="box-container">
        {skills.map((skill, index) => (
          <div className="box" key={index}>
            <img src={skill.image} alt={`${skill.name} icon`} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
