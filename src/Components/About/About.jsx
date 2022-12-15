import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
  Column1,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/dhananjay-kumar-verma",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/dhananjayverma",
    icon: <FaGithub />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>

        <Column1>
          <Img src="https://user-images.githubusercontent.com/108890988/200647602-539cf1c6-d111-4254-9170-f782429221fe.jpg" alt="my image" />
        </Column1>

        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              A dedicated full stack Developer with a specialized skill set
              that enables me to build robust web applications. I am adept in
              front-end frameworks ,backend  &amp; tools and have an eye for performance and pixel-perfect
              accuracy.
            </AboutInfoP>
            <AboutInfoP>
              I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.

        Driven by ambition and fuelled by determination,
       Analytical and detail-oriented Full Stack Web Developer
     who is proficient with the MERN stack and good at user-centric solutions.

I am a quick learner and Collaborative, 
team player and proficient in working with interdisciplinary 
teams and executing goal-oriented projects. Strongly interested in 
obtaining a Software Developer position to work on enhancing the product experience.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
