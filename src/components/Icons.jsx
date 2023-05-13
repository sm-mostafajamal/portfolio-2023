import styled from "styled-components";

const Container = styled.div`
  /* position: absolute; */
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  /* margin-top: 70px; */
  /* margin-left: 300px; */
  width: 80%;
  /* width: 750px; */
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  /* height: 50px; */
  align-items: center;
  font-family: impact, sans-serif;
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
  /* color: red; */
  font-size: 2rem;
  font-weight: 600;
  padding-left: 0.5rem;
  color: red;
  /* color: #6d90af; */
  font-family: "Montserrat", sans-serif;
  font-style: italic;
`;
const IconsContainer = styled.div`
  /* width: 100%; */
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
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
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
