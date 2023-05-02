import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  object-fit: cover;
  bottom: 20px;
  right: 20px;
`;
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  ${(props) =>
    props.direction === "left" &&
    `
    flex-direction: row-reverse;
  `}

  margin: 50px 0;
`;
const ImageContainer = styled.div`
  width: 60%;
  height: 350px;
  border: 1px solid #d35100;
  position: relative;
  border-radius: 5px;
  /* flex: 1; */
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
  padding: 0;
  ${(props) =>
    props.direction === "left" &&
    `
    left: 0;
    justify-content: flex-start;

  `}
`;
const Tool = styled.li`
  margin: 5px;
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
            "padding-top": "10px",
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
          <Tool>Live</Tool>
          <Tool>Github</Tool>
        </Technologies>
      </AboutProject>
    </Container>
  );
};

export default Project;
