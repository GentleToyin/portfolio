import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Work.scss";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const works = [
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
      {" "}
      <h2 className="head-text">
        {" "}
        My <span>Portfolio</span> Section
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <a href={work.projectLink} target="_blank" rel="noreferrer">
              <div className="app__work-img app__flex">
                {" "}
                <img src={work.imgUrl} alt={work.title} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </motion.div>
              </div>
            </a>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
