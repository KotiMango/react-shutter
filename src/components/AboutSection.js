import React from "react";
import { Link } from "react-router-dom";
import home1 from "../img/home1.png";
//Styled
//import styled from "styled-components";
//Importing style components individually
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animations";
import Wave from "./Wave";

const AboutSection = () => {
  //framer motion variants
  return (
    <About>
      <Description>
        <motion.div>
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
        <motion.p variants={fade}>
          Contact us if you want something being filmed
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="Some dude holding a camera or whatever"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
