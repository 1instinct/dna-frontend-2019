// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { ProductType, ProductsArrayType } from "../../types/products";
import type { StateType } from "../../types/redux";

import { getProductId } from "../../actions/products";
import { removeFromCart } from "../../actions/cart";

import styled from "styled-components";

type PropsType = {
  cartItems: {},
  cartArray: [],
  _removeFromCart: (id: string) => void,
  products: ProductsArrayType
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

const calculateTotal = cartArray => {
  return cartArray.reduce((acc, item) => acc + item.price * item.amount, 0);
};

const CartMenu = ({
  cartItems,
  cartArray,
  products,
  _removeFromCart
}): React.Node => (
  <Container>
    {console.log(cartArray)}
    <Logo alt="logo" src="#" />
    <p>I'm the cart menu</p>
    {cartArray.length ? (
      <div>
        {cartArray.map((item, i) => {
          const cartProducts = products.filter(
            product => product.id === item.id
          );
          return cartProducts.map((product, index) => {
            return (
              <CartItem key={index}>
                <h4>
                  {product.title} x {item.amount}
                </h4>
                <CartImage src={product.image} />
                <button onClick={() => _removeFromCart(product.id)}>
                  Remove from cart
                </button>
              </CartItem>
            );
          });
        })}
        <div>Total: ${calculateTotal(cartArray)}</div>
      </div>
    ) : (
      <div>Empty Cart</div>
    )}
  </Container>
);
// const CartMenu = ({ cartItems, products, _removeFromCart }): React.Node => (
//   <Container>
//     <Logo alt="logo" src="#" />
//     <p>I'm the cart menu</p>

//     {Object.keys(cartItems).length > 0 ? (
//       <div>
//         {Object.keys(cartItems).map((itemKey, index) => {
//           const cartItemsArray = products.filter(
//             product => product.id === itemKey
//           );
//           return cartItemsArray.map(item => {
//             const amount = cartItems[itemKey];
//             return (
//               <CartItem key={index}>
//                 <h1>
//                   {item.title} x {amount}
//                 </h1>
//                 <span>${item.price * amount}</span>
//                 <CartImage src={item.image} />
//                 <button onClick={() => _removeFromCart(itemKey)}>
//                   Remove From Cart
//                 </button>
//               </CartItem>
//             );
//           });
//         })}
//         <h1>Total: ${calculateTotal(cartItems, products)}</h1>
//       </div>
//     ) : (
//       <div>Empty Cart</div>
//     )}
//   </Container>
// );

const mapStateToProps = ({ cart, products: { products } }: StateType) => {
  return {
    cartItems: cart.cartItems,
    cartArray: Object.values(cart.cartItems),
    products: Object.values(products)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _removeFromCart: removeFromCart,
      _getProductId: getProductId
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartMenu);
