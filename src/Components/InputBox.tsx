import React from "react";
import styled from "styled-components";
import { mixin } from "../styles/mixin";

export const InputBox = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="enter your message..." />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20%;
  ${mixin.flexSet("flex-start", "center")}

  input {
    width: 80%;
    height: 80%;
    padding: 10px 20px;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;
