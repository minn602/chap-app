import React from "react";
import styled from "styled-components";
import { mixin } from "./styles/mixin";
import { UserList } from "./Components/UserList";
import { Messages } from "./Components/Messages";
import { InputBox } from "./Components/InputBox";

function App() {
  return (
    <Wrapper>
      <UserList />
      <Contents>
        <Messages />
        <InputBox />
      </Contents>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mixin.flexSet("flex-start", "flex-start", "row")}
  border: 1px solid #000;
  border-radius: 16px;
`;

const Contents = styled.div`
  width: 75%;
  height: 100%;
`;
