// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeFromCart, updateCartItem } from "../../actions/cart";

import type { CartItemType } from "../../types/cart";
import type { ProductType } from "../../types/products";

import Colors from "../../constants/colors";
import styled from "styled-components";

type PropsType = {
  _removeFromCart: (id: string) => void,
  _updateCartItem: (id: string, amount: number) => void,
  cartIsOpen: boolean,
  item: CartItemType,
  product: ProductType
};

const CartItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  width: 100%;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 5rem;
    height: 5rem;
    margin-left: 0.5rem;
  }

  i.cart__remove-btn {
    position: absolute;
    cursor: pointer;
    color: ${Colors.darkNavy};
    top: 0;
    right: 0;
    padding: 0.3rem;
    margin-right: 0.5rem;

    &:hover {
      color: orangered;
    }
  }

  .cart__name-wrap {
    display: flex;
    flex-direction: column;

    .cart__item-name {
      font-size: 1.4rem;
      font-weight: 700;
    }
  }

  .cart__item-actions {
    display: flex;
    flex-direction: row;
  }

  .cart__input-count-wrapper {
    display: flex;
    flex-direction: row;
    border-radius: 3px;
    border: 1px solid black;
    padding: 0;
    position: relative;
    width: 10rem;
    justify-content: space-between;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 1.6rem;
      line-height: 1.5rem;
      max-width: 0.8rem;
      min-width: 0.8rem;
      margin: 0 auto;

      &:focus {
        outline: none;
      }
    }

    .cart__input-amount {
      text-align: center;
      background-color: white;
      width: 50%;
    }
  }

  .cart__item-subtotal {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 0.5rem;
  }
`;

class CartItem extends React.Component<PropsType> {
  render(): React.Node {
    const { product, item, _removeFromCart, _updateCartItem } = this.props;
    return (
      <CartItemContainer>
        <div>
          <img src={product.image} />
          <i
            className="bts bt-trash cart__remove-btn"
            onClick={() => _removeFromCart(product.id)}
          />
          <div className="cart__name-wrap">
            <p className="cart__item-name">{product.title}</p>
            <p>
              <small>{product.subtitle}</small>
            </p>
            <div className="cart__item-actions">
              <div className="cart__input-count-wrapper">
                <button onClick={() => _updateCartItem(product.id, -1)}>
                  -
                </button>
                <div className="cart__input-amount">{item.amount}</div>
                <button onClick={() => _updateCartItem(product.id, 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <span className="cart__item-subtotal">
            ${item.amount * product.price}
          </span>
        </div>
      </CartItemContainer>
    );
  }
}

// const mapStateToProps = ({ui}: { cartMenuIsOpen: boolean }) => {
//     return {
//         isOpen: ui.cartMenuIsOpen
//     }
// }

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _removeFromCart: removeFromCart,
      _updateCartItem: updateCartItem
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
