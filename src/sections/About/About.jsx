import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
const About = () => {
  const abouts = [
    {
      title: "JSE-40-01",
      description: "Certified JavaScript Programmer",
      imgUrl: images.jsecert,
      link: "https://www.credly.com/badges/470f9017-e7c4-44cd-8147-e243fc1a81b5/public_url",
    },
    {
      title: "Responsive Web Design",
      description: "Responsive Web Design Developer Certification.",
      imgUrl: images.freecode,
      link: "https://www.freecodecamp.org/certification/fcc683e7c81-2cc6-4a35-9889-42cb8253997f/responsive-web-design",
    },
    {
      title: "AWS Accreditation",
      description: "AWS Partner: Accreditation (Technical)",
      imgUrl: images.awscert2,
      link: "https://www.credly.com/badges/79e452dd-1479-4869-bfb9-c6549815a003/public_url",
    },
    {
      title: "AWS Accreditation",
      description: "AWS Partner: Cloud Economics Accreditation",
      imgUrl: images.awscert1,
      link: "https://www.credly.com/badges/4404fac0-fa41-414a-99d1-fe9b1c3bbe48/public_url",
    },
  ];
  return (
    <>
      <h2 className="head-text" id="about">
        {" "}
        I Know that <span>Good Apps</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <a href={about.link} target="_blank">
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
          </a>
        ))}
      </div>
    </>
  );
};

export default About;
