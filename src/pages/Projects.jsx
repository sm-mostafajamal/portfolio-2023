import styled from "styled-components";
import Title from "../components/Title";
import Project from "../components/Project";
import { useModeState } from "../context/ModeContext";

const Container = styled.div`
  background-color: ${({ mode }) => mode};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-self: center;
`;

const Projects = ({ data }) => {
  const state = useModeState();

  return (
    <Container mode={state.mode ? "black" : "#eae7dc"} id="projects">
      <Wrapper>
        <Title title="Some Projects I've built" />
        {data.map((project, i) => (
          <div key={i}>
            {Number(i) % 2 === 0 ? (
              <Project project={project} />
            ) : (
              <Project project={project} direction="left" />
            )}
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Projects;
