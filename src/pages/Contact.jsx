import styled from "styled-components";
import Title from "../components/Title";
import SocialApps from "../components/SocialApps";
import { useModeState } from "../context/ModeContext";
import devices from "../responsive";

const Container = styled.div`
  height: 100vh;
  background-color: ${({ mode }) => mode};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${devices.mobile({ width: "90%" })}
`;
const Heading = styled.div``;
const Subline = styled.p`
  width: 50%;
  margin: 20px auto;
  color: ${({ mode }) => mode};
  font-size: 24px;
  text-align: center;
  ${devices.mobile({ fontSize: "15px" })}
`;
const ContactMe = styled.a`
  height: 40vh;
  padding: 30px;
  border-radius: 10px;
  background-color: #242424a6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${devices.mobile({ padding: "20px" })}
  text-decoration: none;
`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: 1px solid #d35100;
  background-color: transparent;
  color: #d35100;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const Contact = () => {
  const state = useModeState();

  return (
    <Container mode={state.mode ? "black" : "#eae7dc"} id="contact">
      <Wrapper>
        <Heading>
          <Title title="Get in touch" />
          <Subline mode={state.mode ? "#ccd6f6" : "#d35100"}>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you soon!
          </Subline>
        </Heading>
        <ContactMe href="mailto:sm.mostafajamal@pm.me">
          <Button type="submit">Say Hello!</Button>
        </ContactMe>
      </Wrapper>
      <SocialApps />
    </Container>
  );
};

export default Contact;
