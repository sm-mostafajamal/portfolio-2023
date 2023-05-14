import styled from "styled-components";
import devices from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  /* width: 80%; */
  margin: 150px auto 0 auto;
  ${devices.mobile({ marginTop: "0px" })}
  ${devices.tablet({ marginTop: "100px" })}
  ${devices.pc({ marginTop: "50px" })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background: none;
  animation: slide-left 30s linear infinite;
  @keyframes slide-left {
    from {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      /* -webkit-transform: translateX(-300%); */
      transform: translateX(-100%);
    }
  }
`;
const Animation = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-left: 0.5rem;
  color: red;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
`;
const IconsContainer = styled.div`
  color: white;
  font-size: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: 0.1px solid gray;
  ${devices.mobile({ width: "50px", height: "50px ", margin: "5px" })}
  ${devices.tablet({ width: "60px", height: "60px ", margin: "5px" })}
`;

const Icons = () => {
  return (
    <Container>
      <Wrapper>
        <Animation>
          <IconsContainer>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            <Icon src="./images/icons/bootstrap.svg" alt="" />
            <Icon src="./images/icons/css3.svg" alt="" />
            <Icon src="./images/icons/express.svg" alt="" />
            <Icon src="./images/icons/git-i.svg" alt="" />
            <Icon src="./images/icons/html.svg" alt="" />
            <Icon src="./images/icons/javascript.svg" alt="" />
            <Icon src="./images/icons/materializecss.svg" alt="" />
            <Icon src="./images/icons/mongodb.svg" alt="" />
            <Icon src="./images/icons/nodejs.svg" alt="" />
            <Icon src="./images/icons/react.svg" alt="" />
            <Icon src="./images/icons/redux.svg" alt="" />
          </IconsContainer>
        </Animation>
      </Wrapper>
    </Container>
  );
};

export default Icons;
