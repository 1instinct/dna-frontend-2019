// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { ProductType, ProductsArrayType } from "../../types/products";
import type { StateType } from "../../types/redux";
import { toggleCartMenu } from "../../actions/ui";

import Colors from "../../constants/colors";
import styled from "styled-components";

import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

type PropsType = {
  cartItems: {},
  cartArray: [],
  products: ProductsArrayType
};

const Container = styled.div`
  background-color: #f5eff2;
  height: 100%;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
  margin-top: 1rem;
  overflow-y: scroll;

  .cart__checkout {
    margin-top: 3rem;
  }
`;

const CheckoutPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* color: ${Colors.darkNavy}; */
  /* position: absolute; */
  /* bottom: 0; */
  /* align-self: center; */
  /* width: 100%; */
  flex-shrink: 0;

  p, h3 {
    span {
      float: right;
      font-weight: bold;
    }
  }

  p:last-of-type {
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
  }

  .estimated-total {
    margin-top: 1rem;
  }
`;

const CheckoutButton = styled.button`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  /* position: relative; */
  box-shadow: none;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 0.7rem 0.6rem;
  margin: 1.4rem 0;
  border: none;

  font-size: 1.6rem;
  line-height: 2rem;
  transition: all 0.2s;
  &:focus {
    outline: none;
  }
`;

const GuestCheckoutButton = styled(CheckoutButton)`
  background-color: ${Colors.salmon};
  color: ${Colors.white};
  border: 2px solid transparent;

  &:hover {
    background-color: ${Colors.pink};
    color: ${Colors.darkNavy};
    border: 2px solid ${Colors.darkNavy};
  }
`;

const LoginSignupButton = styled(CheckoutButton)`
  background-color: transparent;
  color: ${Colors.darkNavy};
  border: 2px solid ${Colors.darkNavy};

  &:hover {
    background-color: ${Colors.darkNavy};
    color: ${Colors.white};
  }
`;

const Logo = styled.img`
  width: 1.6rem;
  margin: 60px auto 0px;
`;

const CartImage = styled.img`
  position: absolute;
  left: 0;
  width: 5rem;
  height: 5rem;
  margin-left: 0.5rem;
`;

const EmptyCart = styled.div`
  margin-top: 4rem;
`;

// helpers
const calculateCartSubtotal = cartArray => {
  return cartArray.reduce((acc, item) => acc + item.price * item.amount, 0);
};

// this can be eventually used to factor in shipping and taxes...
const calculateCartTotal = cartArray => {
  return cartArray.reduce((acc, item) => acc + item.price * item.amount, 0);
};

const CartMenu = ({ cartItems, cartArray, products }): React.Node => (
  <Container>
    <CartHeader />
    {cartArray.length ? (
      <CartItems>
        {cartArray.map((item, i) => {
          const cartProducts = products.filter(
            product => product.id === item.id
          );
          return cartProducts.map((product, index) => {
            return <CartItem key={index} product={product} item={item} />;
          });
        })}
        <CheckoutPanel>
          <div className="cart-subtotal">
            <p>
              <strong>Subtotal</strong>{" "}
              <span>${calculateCartSubtotal(cartArray)}</span>
            </p>
            <p>
              <strong>Tax</strong> <small>(calculated in checkout)</small>{" "}
              <span>--</span>
            </p>
            <p>
              <strong>Shipping</strong>
              <span>Free</span>
            </p>
            <h3 className="estimated-total">
              Estimated Total <span>${calculateCartTotal(cartArray)}</span>
            </h3>
          </div>
          <LoginSignupButton>CHECKOUT AS GUEST</LoginSignupButton>
          <LoginSignupButton>LOGIN / CREATE ACCOUNT</LoginSignupButton>
        </CheckoutPanel>
      </CartItems>
    ) : (
      <EmptyCart>Your shopping cart is empty</EmptyCart>
    )}
  </Container>
);

const mapStateToProps = ({ ui, cart, products: { products } }: StateType) => {
  return {
    cartItems: cart.cartItems,
    cartArray: Object.values(cart.cartItems),
    products: Object.values(products),
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
)(CartMenu);
