// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { StateType } from "../../types/redux";
import type { CartItemArrayType } from "../../types/cart";
import { toggleCartMenu } from "../../actions/ui";

import Colors from "../../constants/colors";
import styled from "styled-components";

type PropsType = {
  cartItemArray: CartItemArrayType,
  cartIsOpen: boolean,
  _toggleCartMenu: (open: boolean) => void
};

const CartHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.6rem;
  background: #ffffff;
  box-shadow: rgb(217, 217, 217) 0px 1px 0px;

  .close-button {
    transform: scale(0.8);
    cursor: pointer;
  }

  span {
    font-size: 1.2rem;
    margin: 1rem 0;
    /* transform: translateX(-2rem); */
  }
`;

const EagerCheckoutButton = styled.button`
  text-align: center;
  cursor: ${props => props.theme.cursor};
  display: inline-flex;
  position: relative;
  box-shadow: none;
  justify-content: center;
  width: 100%;
  height: auto;
  max-width: 13.6rem;
  padding: 0.7rem 0.6rem;
  margin: 1.4rem 0;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  transition: all 0.2s;
  text-transform: uppercase;
  font-weight: bold;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props => props.theme.hoverColor || "transparent"};
    box-shadow: ${props => props.theme.shadow || "none"};
  }
`;

const calculateSubtotal = cartArray => {
  return cartArray.reduce((acc, item) => acc + item.price * item.amount, 0);
};

class CartHeader extends React.Component<PropsType> {
  renderCheckoutText(array): string {
    if (array.length === 1) {
      if (array[0].amount === 1) {
        return `1 item - $${calculateSubtotal(array)}`;
      } else {
        return `${array[0].amount} items - $${calculateSubtotal(array)}`;
      }
    } else {
      return `${array.reduce(
        (acc, item) => acc + item.amount,
        0
      )} items - $${calculateSubtotal(array)}`;
    }
  }
  render(): React.Node {
    const { cartItemArray, _toggleCartMenu, cartIsOpen } = this.props;

    return (
      <CartHeaderContainer>
        <i
          className="btl bt-times bt-lg close-button"
          onClick={() => _toggleCartMenu(cartIsOpen)}
        />
        <span>{this.renderCheckoutText(cartItemArray)}</span>
        <EagerCheckoutButton
          theme={
            cartItemArray.length
              ? {
                  bgColor: "#000",
                  textColor: Colors.white,
                  cursor: "pointer",
                  hoverColor: Colors.darkNavy,
                  shadow:
                    "rgba(0, 0, 0, 0.15) 0px 0px 16px, rgba(0, 0, 0, 0.1) 0px 0px 5px;"
                }
              : {
                  bgColor: "transparent",
                  textColor: Colors.darkNavy,
                  cursor: "not-allowed"
                }
          }
        >
          Checkout
        </EagerCheckoutButton>
      </CartHeaderContainer>
    );
  }
}

const mapStateToProps = ({ cart, ui }) => {
  return {
    cartItemArray: Object.values(cart.cartItems),
    cartIsOpen: ui.cartMenuIsOpen
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
)(CartHeader);
