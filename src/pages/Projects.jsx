import styled from "styled-components";
import Title from "../components/Title";

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Project = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 60%;
  height: 350px;
  border: 1px solid #d35100;
  position: relative;
  border-radius: 5px;
  /* flex: 1; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;

  /* top: 0; */
  bottom: 20px;
  right: 20px;
  object-fit: cover;
`;
const AboutProject = styled.div`
  color: white;
  background-color: #242424c9;
  position: absolute;
  text-align: right;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  left: 45%;
  padding: 30px;
  border-radius: 10px;
`;
const ProjectTitle = styled.h2`
  color: #d35100;
  background-color: transparent;
  letter-spacing: 3px;
`;
const About = styled.p`
  line-height: 1.4rem;
  font-weight: 300;
`;
const TechnologiesUsed = styled.ul`
  margin: 0;
  padding: 20px 0;
  list-style: none;
`;
const Tool = styled.li`
  color: rgba(0, 196, 196, 0.747);
`;
const WebLinks = styled.div``;

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Title title="Some Projects I've built" />
        <Project>
          <ImageContainer>
            <Image src="./images/demo.jpg" />
          </ImageContainer>
          <AboutProject>
            <ProjectTitle>Demo</ProjectTitle>
            <About>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              ut, omnis porro, sunt ipsa dignissimos rerum culpa odit saepe
              illum consequuntur optio quas. Minima magnam animi voluptas soluta
              officia maiores. Sed voluptas, quidem vitae nulla velit, doloribus
              in et accusamus fugit vero hic doloremque numquam maiores
              <TechnologiesUsed>
                <Tool>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere ut
                </Tool>
              </TechnologiesUsed>
            </About>
            <WebLinks>
              <span>Live</span>
              <span>Github</span>
            </WebLinks>
          </AboutProject>
        </Project>
        {/* <Project>
          <ImageContainer>
            <Image src="./images/demo.jpg" />
          </ImageContainer>
          <AboutProject>
            <ProjectTitle>Demo</ProjectTitle>
            <About>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              ut, omnis porro, sunt ipsa dignissimos rerum culpa odit saepe
              illum consequuntur optio quas. Minima magnam animi voluptas soluta
              officia maiores. Sed voluptas, quidem vitae nulla velit, doloribus
              in et accusamus fugit vero hic doloremque numquam maiores
              <TechnologiesUsed>
                <Tool>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere ut
                </Tool>
              </TechnologiesUsed>
            </About>
            <WebLinks>
              <span>Live</span>
              <span>Github</span>
            </WebLinks>
          </AboutProject>
        </Project>
        <Project>
          <ImageContainer>
            <Image src="./images/demo.jpg" />
          </ImageContainer>
          <AboutProject>
            <ProjectTitle>Demo</ProjectTitle>
            <About>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              ut, omnis porro, sunt ipsa dignissimos rerum culpa odit saepe
              illum consequuntur optio quas. Minima magnam animi voluptas soluta
              officia maiores. Sed voluptas, quidem vitae nulla velit, doloribus
              in et accusamus fugit vero hic doloremque numquam maiores
              <TechnologiesUsed>
                <Tool>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere ut
                </Tool>
              </TechnologiesUsed>
            </About>
            <WebLinks>
              <span>Live</span>
              <span>Github</span>
            </WebLinks>
          </AboutProject>
        </Project>
        <Project>
          <ImageContainer>
            <Image src="./images/demo.jpg" />
          </ImageContainer>
          <AboutProject>
            <ProjectTitle>Demo</ProjectTitle>
            <About>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              ut, omnis porro, sunt ipsa dignissimos rerum culpa odit saepe
              illum consequuntur optio quas. Minima magnam animi voluptas soluta
              officia maiores. Sed voluptas, quidem vitae nulla velit, doloribus
              in et accusamus fugit vero hic doloremque numquam maiores
              <TechnologiesUsed>
                <Tool>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere ut
                </Tool>
              </TechnologiesUsed>
            </About>
            <WebLinks>
              <span>Live</span>
              <span>Github</span>
            </WebLinks>
          </AboutProject>
        </Project> */}
      </Wrapper>
    </Container>
  );
};

export default Projects;
