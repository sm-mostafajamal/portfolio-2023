import { DarkMode, LightMode } from "@mui/icons-material";
import devices from "../responsive";
import styled from "styled-components";
import SocialApps from "../components/SocialApps";
import { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Container = styled.div`
  height: 100vh;
  background-color: ${({ mode }) => mode};
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* height: 10vh; */
  padding: 20px 0;
`;
const Resume = styled.button`
  color: ${({ mode }) => mode};
  padding: 10px;
  margin-right: 80px;
  background-color: transparent;
  border: 1px solid #d351006b;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    /* background-color: white; */
    color: black;
    transition: 0.5s all ease-in;
  }
`;
const Mode = styled.span`
  position: fixed;
  top: 25px;
  z-index: 999;
  color: ${({ mode }) => mode};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Icon = styled.div`
  border: 0.5px solid ${({ mode }) => mode};
  border-radius: 50%;
  color: ${({ mode }) => mode};
  font-family: "Rubik Wet Paint", cursive;
  font-size: 3rem;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${devices.mobile({ width: "50px", height: "50px", fontSize: "2rem" })}
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-family: "Josefin Slab", serif;
  color: ${({ mode }) => mode};
  font-weight: 300;
  border-top: 0.1px solid ${({ mode }) => mode};
  border-bottom: 0.1px solid ${({ mode }) => mode};
  padding: 50px;
  margin: 50px 0;
  font-size: 2.5rem;
  ${devices.mobile({ fontSize: "1.2rem", padding: "25px" })}
`;
const Name = styled.span`
  font-family: "Sacramento", cursive;
  color: #d35100;
  /* color: teal; */
  font-weight: bold;
`;
const Bottom = styled.span`
  font-size: 22px;
  font-family: "Josefin Slab", serif;
  ${devices.mobile({ fontSize: "12px" })}
`;

const Navbar = styled.ul`
  background-color: #d251002c;
  position: fixed;
  top: 20px;
  z-index: 999;
  /* transform: translateY(200%); */
  color: ${({ mode }) => mode};
  display: flex;
  justify-content: space-around;
  padding: 0;
  border: 0.1px solid ${({ mode }) => mode};
  border-radius: 5px;
  cursor: pointer;
  ${devices.mobile({ position: "static", width: "90%" })}
`;
const List = styled.li`
  list-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ mode }) => mode};
  padding: 10px 20px;
  ${devices.mobile({ fontSize: "10px", padding: "5px 10px" })}
`;
const Bar = styled.span`
  border-right: 0.1px solid ${({ mode }) => mode};
  /* rgba(24, 26, 27, 0.07) */
`;
const Link = styled.a`
  text-decoration: none;
  color: ${({ mode }) => mode};
`;

const Home = () => {
  const [state, modeDispatch] = useContext(ModeContext);
  return (
    <Container mode={state.mode ? "black" : "#eae7dc"} id="home">
      <Header>
        <Resume>
          <Link
            href="./files/SM_Mostafa_Jamal_Resume.pdf"
            download="SM_Mostafa_Jamal_Resume"
            mode={state.mode ? "white" : "black"}
          >
            Resume
          </Link>
        </Resume>
        <Mode
          mode={state.mode ? "white" : "black"}
          onClick={() => modeDispatch({ type: "TOGGLE" })}
        >
          {state.mode ? <LightMode /> : <DarkMode />}
        </Mode>
      </Header>
      <Wrapper>
        <Icon mode={state.mode ? "#e8e6e3" : "black"}>M</Icon>
        <Title mode={state.mode ? "white" : "black"}>
          Hi there, I'm <Name>S.M. Mostafa Jamal</Name>
          <Bottom>
            <br />A full-stack software engineer
          </Bottom>
        </Title>
        <Navbar mode={state.mode ? "#c8c6c4" : "black"} href="#home">
          <Link mode={state.mode ? "#c8c6c4" : "black"} href="#home">
            <List>Home</List>
          </Link>
          <Bar />
          <Link mode={state.mode ? "#c8c6c4" : "black"} href="#about">
            <List>about me</List>
          </Link>
          <Bar />
          <Link mode={state.mode ? "#c8c6c4" : "black"} href="#projects">
            <List>projects</List>
          </Link>
          <Bar />
          <Link mode={state.mode ? "#c8c6c4" : "black"} href="#contact">
            <List>contact</List>
          </Link>
        </Navbar>
        <SocialApps />
      </Wrapper>
    </Container>
  );
};

export default Home;
