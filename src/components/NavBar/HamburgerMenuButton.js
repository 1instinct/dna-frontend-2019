import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { toggleSideMenu } from "../../actions/ui";

// import './HamburgerMenuButton.styl'
// We use animated-hamburger.scss because we can't use styled-components :(

const Bar = styled.div`
  width: 20px;
  height: 1px;
  background-color: #718ba8;
  margin: 5px 0;
  transition: 0.4s;
`;

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  outline: none;
`;

const HamburgerMenuButton = ({ _toggleSideMenu }) => (
  <Container
    tabIndex="0"
    role="button"
    onKeyPress={() => {}}
    onClick={() => {
      _toggleSideMenu();
    }}
  >
    <Bar />
    <Bar />
    <Bar />
  </Container>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _toggleSideMenu: toggleSideMenu
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(HamburgerMenuButton);
