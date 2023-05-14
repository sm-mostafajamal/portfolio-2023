import styled from "styled-components";
import Title from "../components/Title";
import Icons from "../components/Icons";
import { useModeState } from "../context/ModeContext";
import devices from "../responsive";

const Container = styled.div`
  height: 100%;
  /* background-color: white; */
  /* background-color: #151515; */
  background-color: ${({ mode }) => mode};

  display: flex;
  flex-direction: column;
`;

const DetailsWrapper = styled.div`
  width: 90%;
  /* height: 90vh; */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  ${devices.mobile({
    flexDirection: "column",
    margin: "20px 0",
    alignItems: "center",
  })}
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
`;
const Details = styled.div`
  color: ${({ mode }) => mode};
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.6rem;
  ${devices.mobile({ fontSize: "16px" })}
  ${devices.tablet({ fontSize: "16px" })}
`;
const Article = styled.p``;
const TechTitle = styled.span`
  font-size: 18px;
  font-weight: 400;
  display: block;
  margin: 20px 0;
`;
const Skills = styled.ul`
  height: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  ${devices.mobile({ height: "100%" })}
`;
const Skill = styled.li`
  list-style: none;
  color: rgba(255, 255, 255, 0.849);
  background-color: teal;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-weight: 500;
  ${devices.mobile({ fontSize: "14px", margin: "5px", padding: "5px" })}
  ${devices.tablet({ fontSize: "16px", margin: "5px", padding: "5px" })}
`;
const ImageContainer = styled.div`
  min-width: 290px;
  height: 300px;
  border-radius: 5px;
  position: relative;
  border: 2px solid teal;
  ${devices.mobile({ width: "290px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const AboutMe = () => {
  const state = useModeState();

  return (
    <Container mode={state.mode ? "black" : "#eae7dc"} id="about">
      <DetailsWrapper>
        <About>
          <Title title={"About Me"} />
          <Wrapper>
            <Details mode={state.mode ? "white" : "black"}>
              <Article>
                I'm a passionate, forward-thinking Software Engineer who is
                willing to put up every effort to find a solution. While
                constantly thinking about code, this passion often pushes me to
                solve coding problems while working out, conversing with
                friends, or playing video games. When I discern the solution, I
                rush to my computer to test it out.
                <br />
                My name is SM. Mostafa Jamal. I'm a devoted son of Bangladeshi
                parents, passionate about creating community within the tech
                space.
                <br />
                When I'm not coding, I like to listen to music, watch movies,
                animes, TV Shows, workout at the gym, play video games, and read
                tech articles.
                <TechTitle>Technologies that I've been working with:</TechTitle>
              </Article>
              <Skills>
                <Skill>JavaScript (ES6+)</Skill>
                <Skill>React.Js</Skill>
                <Skill>Redux.Js</Skill>
                <Skill>Node.Js</Skill>
                <Skill>Express.Js</Skill>
                <Skill>MongoDB</Skill>
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>SCSS</Skill>
                <Skill>Materialize</Skill>
                <Skill>BootStrap</Skill>
                <Skill>Jest</Skill>
                <Skill>Git</Skill>
              </Skills>
              <Icons />
            </Details>
            <ImageContainer>
              <Image src="./images/img.png" />
            </ImageContainer>
          </Wrapper>
        </About>
      </DetailsWrapper>
    </Container>
  );
};

export default AboutMe;
