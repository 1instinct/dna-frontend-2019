// @flow
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5eff2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 160px;
  margin: 60px auto 0px;
`;

const SideMenu = (): React.Node => (
  <Container>
    <Logo alt="logo" src="#" />
    <p>I'm the side menu</p>
  </Container>
);

export default SideMenu;
