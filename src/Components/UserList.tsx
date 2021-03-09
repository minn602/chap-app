import React from "react";
import styled from "styled-components";
import { mixin } from "../styles/mixin";

export const UserList = () => {
  return (
    <Wrapper>
      <h2>User List</h2>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 25%;
  height: 100%;
  padding: 20px;
  ${mixin.flexSet("flex-start", "center", "column")}
  border-right: 1px solid #000;
`;
