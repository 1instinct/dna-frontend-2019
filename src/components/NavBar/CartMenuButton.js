//@flow
/* eslint-disable flowtype/require-return-type */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleCartMenu } from "../../actions/ui";

import type { StateType } from "../../types/redux";

import Colors from "../../constants/colors";
import styled from "styled-components";

// import './HamburgerMenuButton.styl'
// We use animated-hamburger.scss because we can't use styled-components :(

type PropsType = {
  cartArray: []
};

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
  position: relative;

  i.cart-icon {
    display: inline-block;
    transform: scale(0.9);
    color: ${Colors.darkNavy};
    font-size: 2.5rem;

    &:hover {
      color: ${Colors.white};
    }
  }

  .cart-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(1.6rem, -1.5rem);
    border-radius: 50%;
    background-color: orangered;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 1.8rem;
    font-weight: bold;
    color: ${Colors.white};
  }
`;

const CartMenuButton = ({ _toggleCartMenu, cartArray }) => (
  <Container
    tabIndex="0"
    role="button"
    onKeyPress={() => {}}
    onClick={() => {
      _toggleCartMenu();
    }}
  >
    <i className="bts bt-shopping-cart bt-lg cart-icon" />
    {cartArray.length ? (
      <div className="cart-badge">
        <span>{cartArray.length}</span>
      </div>
    ) : (
      ""
    )}
  </Container>
);

const mapStateToProps = ({ cart }: StateType) => {
  return {
    cartArray: Object.values(cart.cartItems)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _toggleCartMenu: toggleCartMenu
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartMenuButton);
