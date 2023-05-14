import styled from "styled-components";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { useModeState } from "../context/ModeContext";
import devices from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  color: ${({ mode }) => mode};
  margin-top: 80px;

  ${devices.mobile({ width: "60%" })}
  ${devices.tablet({ width: "40%" })}
  ${devices.tablet({ width: "30%" })}
`;
const SocialIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${({ mode }) => mode};
  border-radius: 15px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  ${devices.mobile({ height: "40px", width: "40px" })}
`;
const Link = styled.a`
  text-decoration: none;
  color: ${({ mode }) => mode};
`;

const SocialApps = () => {
  const state = useModeState();

  return (
    <Container mode={state.mode ? "white" : "black"}>
      <SocialIcon>
        <Link
          target="_blank"
          href="https://linkedin.com/in/sm-mostafajamal"
          mode={state.mode ? "#c8c6c4" : "black"}
        >
          <LinkedIn style={{ fontSize: "30px" }} />
        </Link>
      </SocialIcon>
      <SocialIcon>
        <Link
          target="_blank"
          href="https://github.com/sm-mostafajamal"
          mode={state.mode ? "#c8c6c4" : "black"}
        >
          <GitHub style={{ fontSize: "30px" }} />
        </Link>
      </SocialIcon>
      <SocialIcon>
        <Link
          target="_blank"
          href="https://www.facebook.com/SM.MostafaJamal/"
          mode={state.mode ? "#c8c6c4" : "black"}
        >
          <Facebook style={{ fontSize: "30px" }} />
        </Link>
      </SocialIcon>
      <SocialIcon>
        <Link
          target="_blank"
          href="https://www.instagram.com/sm.mostafajamal/"
          mode={state.mode ? "#c8c6c4" : "black"}
        >
          <Instagram style={{ fontSize: "30px" }} />
        </Link>
      </SocialIcon>
    </Container>
  );
};

export default SocialApps;
