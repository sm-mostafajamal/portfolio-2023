import styled from "styled-components";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Container = styled.div`
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
  border: 0.5px solid #ffffff52;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;
const SocialApp = () => {
  return (
    <Container>
      <SocialIcon>
        <LinkedIn style={{ fontSize: "20px" }} />
      </SocialIcon>
      <SocialIcon>
        <GitHub style={{ fontSize: "20px" }} />
      </SocialIcon>
      <SocialIcon>
        <Facebook style={{ fontSize: "20px" }} />
      </SocialIcon>
      <SocialIcon>
        <Instagram style={{ fontSize: "20px" }} />
      </SocialIcon>
    </Container>
  );
};

export default SocialApp;
