import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";
import CV from "../Resume/dj.pdf";
import "./typing.css";

const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <br />
          <H1>Hi 👋 I'm </H1>
          <span>
            <h2 data-text="Dhananjay verma">Dhananjay verma</h2>
          </span>
          <br />
          <P>
           An enthusiastic Full stack  Web Developer
            with a strong set of
            technical as well as non-technical 
            skills and a dedication towards
            creating useful and interactive web applications. 
            </P>
          <HeaderButtons>
            <A
            download=""
              // target="_blank"
              // rel="noreferrer"
              // href="https://drive.google.com/file/d/1ysTr0XbJZseCXvz_jQa52mcRvkpZNA2v/view?usp=share_link"
              // href="dhananjay_resume.pdf"
              // href="https://drive.google.com/file/d/16tlRtOoxhM_MCIrLSA98iETLNFa6KB4f/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3D527fbb050b808663:TM%3D1667971910:C%3Dr:IP%3D49.37.75.66-:S%3DSGT30XC-Y6J1aE7Iu-Wi1OI%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DWed,+09-Nov-2022+08:31:50+GMT"
               href={CV}
            >
              Resume
            </A>
            &nbsp;&nbsp;&nbsp;
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
            >
              <A>Projects</A>
            </Link>
          </HeaderButtons>
        </div>
        <br />
      </HeaderContent>
    </Container>
  );
};

export default Banner;
