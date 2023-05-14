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
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${devices.mobile({ width: "90%" })}
`;
const Heading = styled.div``;
const Subline = styled.p`
  margin: 20px 0;
  color: ${({ mode }) => mode};
  font-size: 18px;
  ${devices.mobile({ fontSize: "15px" })}
`;
const Form = styled.form`
  height: 40vh;
  padding: 30px;
  border-radius: 10px;
  background-color: #242424a6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${devices.mobile({ padding: "20px" })}
`;
const Input = styled.input`
  width: 90%;
  padding: 15px;
  margin: 5px auto;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.733);
`;
const Textarea = styled.textarea`
  width: 90%;
  padding: 15px;
  margin: 5px auto;

  resize: none;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.733);
`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: 1px solid #d35100;
  background-color: transparent;
  color: #d35100;
  font-size: 16px;
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
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </Subline>
        </Heading>
        {/* <Form method="post" netlify netlify-honeypot="bot-field" hidden> */}
        <Form
          netlify
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Input type="hidden" name="form-name" value="contact" />
          <Input type="name" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Textarea
            name="message"
            rows="5"
            cols="30"
            placeholder="Your Message"
            required
          />
          <Button type="submit">SUBMIT</Button>
        </Form>
      </Wrapper>
      <SocialApps />
    </Container>
  );
};

export default Contact;
