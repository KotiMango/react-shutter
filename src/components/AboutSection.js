import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
//Styled
//import styled from "styled-components";
//Importing style components individually
import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  //framer motion variants
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>Contact us if you want something being filmed </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Some dude holding a camera or whatever" />
      </Image>
    </About>
  );
};

export default AboutSection;
