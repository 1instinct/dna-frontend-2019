import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { toggleCartMenu } from "../../actions/ui";

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

const CartMenuButton = ({ _toggleCartMenu }) => (
  <Container
    tabIndex="0"
    role="button"
    onKeyPress={() => {}}
    onClick={() => {
      _toggleCartMenu();
    }}
  >
    <i className="bts bt-shopping-cart bt-md" />
  </Container>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _toggleCartMenu: toggleCartMenu
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(CartMenuButton);
