import styled from "styled-components";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  color: ${({ mode }) => mode};
  padding-top: 30px;
`;
const SocialIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${({ mode }) => mode};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
const SocialApps = () => {
  const [state] = useContext(ModeContext);

  return (
    <Container mode={state.mode ? "white" : "black"}>
      <SocialIcon>
        <LinkedIn style={{ fontSize: "30px" }} />
      </SocialIcon>
      <SocialIcon>
        <GitHub style={{ fontSize: "30px" }} />
      </SocialIcon>
      <SocialIcon>
        <Facebook style={{ fontSize: "30px" }} />
      </SocialIcon>
      <SocialIcon>
        <Instagram style={{ fontSize: "30px" }} />
      </SocialIcon>
    </Container>
  );
};

export default SocialApps;
