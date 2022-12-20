import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
const About = () => {
  const abouts = [
    {
      title: "Frontend Development",
      description: "I am a solution driven frontend developer",
      imgUrl: images.about03,
    },
    {
      title: "App Development",
      description: "I am a solution driven app developer",
      imgUrl: images.about02,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        {" "}
        I Know that <span>Good Apps</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}{" "}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}{" "}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
