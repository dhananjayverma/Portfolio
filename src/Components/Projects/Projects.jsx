import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import {SiRedux,SiFirebase,SiJson} from "react-icons/si";
const Projects = () => {
  const projects = [
    
    {
      id: 2,
      project_name: "Nakuri.com",
     
      image:"https://user-images.githubusercontent.com/108890988/189496670-86396bc4-cea9-4677-a3c6-be3693af3333.png",
      project_desc:
        "Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters.",
      deploy_link: " https://genuine-sunburst-172606.netlify.app",
      repo_link: "https://github.com/dhananjayverma/naukri-website-/tree/main/naukri%20website",
      tech_stack: [
         <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },
 {
      id: 4,
      project_name: "naykaa-website-clone",
      image: "https://user-images.githubusercontent.com/108890988/189495829-86722986-464d-4837-b49e-cb737600c7d3.png",
      project_desc:
        "Nykaa is an Indian e-commerce company. It sells beauty, wellness and fashion products across websites, mobile apps and 100+ offline stores.",
        deploy_link:"dreamy-gumdrop-ca3b70.netlify.app/",
        repo_link:"https://github.com/dhananjayverma/naykaa-website-clone",


      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
    {
      id: 3,
      project_name: "Boat-lifestyle-clone",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1666214849862/-f4IgEt98.jpg", 
      project_desc:
        " An electronic e-commerce website boat-lifestyle. Built using react,redux,json,chakra ui ,Firebase.",
      deploy_link: "https://clone-boat-lifestyle.netlify.app/",
      repo_link: "https://github.com/dhananjayverma/boat-lifestyle-clone-website",
      tech_stack: [
        <FaReact />,
        <SiJson/>,
        <SiRedux/>,
        <SiFirebase/>,
      ],
    },
   
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
