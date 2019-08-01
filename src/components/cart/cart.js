// @flow
import * as React from "react";
import { connect } from "react-redux";
import CartItem from './cartItem';
import type { StateType } from "../../types/redux";
import type { ProductType } from "../../types/products";

// eslint-disable-next-line react/prop-types
class Cart extends React.Component<PropsType> {
  render() {
    const { products } = this.props;
    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const quantity = products.reduce((acc, product) => acc + product.quantity, 0);
    const itemWording = quantity > 1 ? 'items' : 'item';
    return (
      <section className="section content">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <h3>Cart</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6"><h4>Product</h4></div>
            <div className="column is-2"><h4>Price</h4></div>
            <div className="column is-2"><h4>Quantity</h4></div>
            <div className="column is-2"><h4>Total</h4></div>
          </div>
          { products.map(product => <CartItem
            productId={ product.id }
            productName={ product.title }
            price={ product.price }
            quantity={ product.quantity }
            productUrl={ product.image }></CartItem>) }
          <div className="columns">
            <div className="column is-6"></div>
            <div className="column is-4"><h5>Cart Subtotal</h5></div>
            <div className="column is-2"><h5>$ { subtotal.toFixed(2) }</h5></div>
          </div>
          <div className="is-divider"></div>
          <div className="columns">
            <div className="column is-6">
              <h4>Shipping:</h4>
              <div>
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="shippingType" value="Free shipping"></input>
                    Free shipping (2-3 days)
                  </label>
                </div>
              </div>
              <div className="m-t-sm">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="shippingType"></input>
                    Express shipping (1-2 days)
                  </label>
                </div>
              </div>
              <div className="button is-medium is-primary m-t-lg">Calculate shipping</div>
            </div>
            <div className="is-divider-vertical"></div>
            <div className="column is-6">
              <h4>Address:</h4>
              <div className="m-t-sm">
                To: 2355 Cove Ave, Los Angeles, CA 90030
              </div>
              <div className="m-t-sm">
                Or change an address
              </div>
              <div className="m-t-sm">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="button is-medium is-primary m-t-sm">Add a new address</div>
            </div>
          </div>
          <div className="is-divider"></div>
          <div className="columns">
            <div className="column has-text-centered">
              <h4>Cart subtotal ({ quantity } { itemWording })</h4>
              <h5>$ { subtotal.toFixed(2) }</h5>
              <div className="button is-medium is-primary m-t-sm"
                   to={ {
                     type: "CHECKOUT",
                     payload: { category: "checkout" }
                   } }>
                Proceed to checkout
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ cart }: StateType): any => {
  return {
    products: cart.products,
  };
};

export default connect(mapStateToProps)(Cart);
