import React from "react";
import home1 from "../img/home1.png";
//Styled
//import styled from "styled-components";
//Importing style components individually
import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
