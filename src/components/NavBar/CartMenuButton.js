// @flow
import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { toggleCartMenu } from "../../actions/ui";
import type { DispatchType } from "../../types/redux";

// import './HamburgerMenuButton.styl'
// We use animated-hamburger.scss because we can't use styled-components :(

type PropsType = {
  _toggleCartMenu: () => void
};

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  outline: none;
`;

const CartMenuButton = ({ _toggleCartMenu }: PropsType): React.Node => (
  <Container
    tabIndex="0"
    role="button"
    onKeyPress={() => {}}
    onClick={() => {
      _toggleCartMenu();
    }}
  >
    {/* <Bar />
    <Bar />
    <Bar /> */}
    <button>Cart</button>
  </Container>
);

const mapDispatchToProps = (dispatch: DispatchType): {} =>
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
