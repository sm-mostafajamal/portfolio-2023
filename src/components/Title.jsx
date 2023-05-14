import React from "react";
import styled from "styled-components";
import { useModeState } from "../context/ModeContext";
import devices from "../responsive";

const PageTitle = styled.h1`
  color: ${({ mode }) => mode};
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 50px;
  ${devices.mobile({ fontSize: "24px", marginBottom: "0px" })}
`;
const Line = styled.hr`
  height: 0px;
  width: 40%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d351007a;
  margin-left: 20px;
  ${devices.mobile({ width: "55%", marginLeft: "10px" })}
`;

const Title = ({ title, dark }) => {
  const state = useModeState();

  return (
    <PageTitle mode={state.mode ? "white" : "black"}>
      {title} <Line />
    </PageTitle>
  );
};

export default Title;
