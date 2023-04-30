import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
  color: white;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  /* margin-bottom: 50px; */
`;
const Line = styled.hr`
  height: 0px;
  width: 30%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d351007a;
  margin-left: 20px;
`;

const Title = ({ title }) => {
  return (
    <PageTitle>
      {title} <Line />
    </PageTitle>
  );
};

export default Title;
