import { Launch } from "@mui/icons-material";
import styled from "styled-components";
import devices from "../responsive";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin: 50px 0;
  ${(props) =>
    props.direction === "left" &&
    `
    flex-direction: row-reverse;
    `}
  ${devices.mobile({ flexDirection: "column", margin: "20px 0" })}
  ${devices.tablet({ margin: "40px 0" })}
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 350px;
  border: 1px solid #d35100;
  position: relative;
  border-radius: 5px;
  ${devices.mobile({ width: "100%", height: "200px" })}
  ${devices.tablet({ height: "280px" })}
  ${devices.pc({ height: "350px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  object-fit: cover;
  bottom: 20px;
  right: 20px;
  ${devices.mobile({ position: "static", width: "100%" })}
`;
const AboutProject = styled.div`
  color: white;
  background-color: #242424c9;
  position: absolute;
  text-align: right;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-self: center;
  left: 50%;
  padding: 30px;
  border-radius: 10px;
  ${(props) =>
    props.direction === "left" &&
    `
    left: 0;
    text-align: left;
  `}
  ${devices.mobile({
    position: "static",
    width: "95%",
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
  })}
    ${devices.tablet({
    width: "50%",
    padding: "10px",
    fontSize: "14px",
  })}
      ${devices.pc({
    padding: "20px",
    fontSize: "16px",
  })}
`;
const ProjectTitle = styled.h2`
  color: #d35100;
  /* background-color: #d35100; */
  /* background-color: transparent; */
  letter-spacing: 3px;
`;
const About = styled.p`
  line-height: 1.4rem;
  font-weight: 300;
  padding-bottom: 10px;
`;
const Divider = styled.hr`
  border: 0.1px solid rgba(128, 128, 128, 0.349);
`;
const Technologies = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 0;
  ${(props) =>
    props.direction === "left" &&
    `
    left: 0;
    justify-content: flex-start;

  `}
  ${devices.mobile({ justifyContent: "center" })}
`;
const Tool = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 16px;
  font-weight: 300;
`;
const Link = styled.a`
  text-decoration: none;
  color: #4dc6af;
`;
const Project = ({ project, direction }) => {
  const cardDirection = direction;
  return (
    <Container direction={cardDirection} key={project.title}>
      <ImageContainer>
        <Image src={project.img} />
      </ImageContainer>
      <AboutProject direction={cardDirection}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <About>{project.about}</About>
        <Divider />
        <Technologies
          direction={cardDirection}
          style={{
            paddingTop: "10px",
            color: "rgba(0, 196, 196, 0.747)",
          }}
        >
          {project.tools.map((tool) => (
            <Tool key={tool}>{tool}</Tool>
          ))}
        </Technologies>
        <Technologies
          direction={cardDirection}
          style={{ fontSize: "18px", color: "#4dc6af", cursor: "pointer" }}
        >
          <Link href={`${project.live}`} target="_blank">
            <Tool>
              Live <Launch />
            </Tool>
          </Link>
          <Link href={`${project.client}`} target="_blank">
            <Tool>
              Client-Side Code <Launch />
            </Tool>
          </Link>
          <Link href={`${project.server}`} target="_blank">
            <Tool>
              Server-Side Code <Launch />
            </Tool>
          </Link>
        </Technologies>
      </AboutProject>
    </Container>
  );
};

export default Project;
