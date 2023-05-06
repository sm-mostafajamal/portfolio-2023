import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import SocialApps from "../components/SocialApps";

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Heading = styled.div``;
const Subline = styled.p`
  margin-top: 20px;
  color: #ccd6f6;
  font-size: 18px;
`;
const Form = styled.form`
  height: 40vh;
  padding: 30px;
  border-radius: 10px;
  background-color: #242424c9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  padding: 15px;
  margin: auto;
  border: none;
  outline: none;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
  width: 80%;
  padding: 15px;
  margin: auto;
  resize: none;
  border-radius: 5px;
  outline: none;
  border: none;
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
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title title="Get in touch" />
          <Subline>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
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
