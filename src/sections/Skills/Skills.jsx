import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Skills.scss";
const Skills = () => {
  const skills = [
    {
      name: "React",
      imgUrl: images.react,
    },
    {
      name: "HTML",
      imgUrl: images.html,
    },
    {
      name: "CSS",
      imgUrl: images.css,
    },
    {
      name: "JavaScript",
      imgUrl: images.javascript,
    },
    {
      name: "Redux",
      imgUrl: images.redux,
    },
    {
      name: "Sass",
      imgUrl: images.sass,
    },
    {
      name: "GraphQL",
      imgUrl: images.graphql,
    },
    {
      name: "Git",
      imgUrl: images.git,
    },
    {
      name: "Figma",
      imgUrl: images.figma,
    },
    {
      name: "TypeScript",
      imgUrl: images.typescript,
    },
  ];
  const experinces = [
    {
      title: "Frontend Development",
      description: "I am a solution driven frontend developer",
      imgUrl: images.about03,
      projectLink: "",
    },
    {
      title: "App Development",
      description: "I am a solution driven app developer",
      imgUrl: images.about02,
      projectLink: "",
    },
    {
      title: "App Development",
      description: "I am a solution driven app developer",
      imgUrl: images.about02,
      projectLink: "",
    },
    {
      title: "App Development",
      description: "I am a solution driven app developer",
      imgUrl: images.about02,
      projectLink: "",
    },
  ];
  return (
    <>
      <h2 className="head-text" id="skills">
        {" "}
        My Current <span>Skills</span>
      </h2>
      <div
        className="app__skills-container"
        style={{ justifyContent: "center" }}
      >
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
