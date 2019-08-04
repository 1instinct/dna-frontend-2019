// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { ProductType } from "../../types/products";
import type { StateType } from "../../types/redux";

import { removeFromCart } from "../../actions/cart";

import styled from "styled-components";

type PropsType = {
  cartItems: [],
  _removeFromCart: (index: Number) => void
};

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

const CartImage = styled.img`
  width: 150px;
  height: 150px;
`;

const ItemSubtotalLabel = styled.span`
  padding: 1rem;
  font-size: 1.6rem;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const calculateTotal = cartItems => {
  if (cartItems.length > 0) {
    const sum = cartItems
      .map(item => item.price * item.quantity)
      .reduce((a, b) => a + b);
    console.log(sum, "the cart total");
    ``;
    return sum;
  }
};

const CartMenu = ({ cartItems, _removeFromCart }): React.Node => (
  <Container>
    <Logo alt="logo" src="#" />
    <p>I'm the cart menu</p>

    {cartItems.length > 0 ? (
      <div>
        {cartItems.map((item, index) => {
          return (
            <CartItem key={index}>
              <div>
                <h3>
                  {item.title} x {item.quantity}
                </h3>
                <span>${item.price * item.quantity}</span>
              </div>
              <CartImage src={item.image} />
              <button onClick={() => _removeFromCart(index)}>
                Remove from cart
              </button>
            </CartItem>
          );
        })}
        <h3>Total: ${calculateTotal(cartItems)}</h3>
      </div>
    ) : (
      <div>Empty Cart</div>
    )}
  </Container>
);

const mapStateToProps = ({ cart }: StateType) => {
  return {
    cartItems: cart.cartItems
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _removeFromCart: removeFromCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartMenu);
