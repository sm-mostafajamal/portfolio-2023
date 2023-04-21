import {
  DarkModeOutlined,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  WbSunnyOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: black;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* height: 10vh; */
  padding: 20px 0;
`;
const Resume = styled.button`
  color: white;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #d35100;

  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s all ease-in;
  }
`;
const Mode = styled.span`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Icon = styled.div`
  border: 0.5px solid #303436;
  border-radius: 50%;
  color: #e8e6e3;
  font-family: "Rubik Wet Paint", cursive;
  font-size: 3rem;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-family: "Josefin Slab", serif;
  color: white;
  font-weight: 300;
  border-top: 0.1px solid #303436;
  border-bottom: 0.1px solid #303436;
  padding: 50px;
  /* margin: 50px; */
  font-size: 2.5rem;
`;
const Navbar = styled.ul`
  width: 30%;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 0;
  border: 0.1px solid #303436;
  border-radius: 5px;
  cursor: pointer;
`;
const List = styled.li`
  list-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 500;
  color: #c8c6c4;
  padding: 15px;
`;
const Bar = styled.span`
  border-right: 0.1px solid #303436;
  /* rgba(24, 26, 27, 0.07) */
`;
const Name = styled.span`
  font-family: "Sacramento", cursive;
  color: #d35100;
  font-weight: bold;
`;
const Bottom = styled.span`
  font-size: 22px;
  font-family: "Josefin Slab", serif;
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  color: white;
`;
const SocialIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #303436;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
const Home = () => {
  return (
    <Container>
      <Header>
        <Resume>Resume</Resume>
        <Mode>
          <WbSunnyOutlined />
          {/* <DarkModeOutlined /> */}
        </Mode>
      </Header>
      <Wrapper>
        <Icon>M</Icon>
        <Title>
          Hi there, I'm <Name>S.M. Mostafa Jamal</Name>
          <Bottom>
            <br />A full-stack software engineer
          </Bottom>
        </Title>
        <Navbar>
          <List>about me</List>
          <Bar />
          <List>projects</List>
          <Bar />
          <List>contact</List>
        </Navbar>
        <SocialIcons>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
          <SocialIcon>
            <GitHub />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default Home;
