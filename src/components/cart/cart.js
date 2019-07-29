// @flow
import * as React from "react";
// import styled from "styled-components";
import CartItem from "./cartItem";

// eslint-disable-next-line react/prop-types
class Cart extends React.Component<{}> {
  render(): React.Node {
    return (
      <section className="section content">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <h3>Cart</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <h4>Product</h4>
            </div>
            <div className="column is-2">
              <h4>Price</h4>
            </div>
            <div className="column is-2">
              <h4>Quantity</h4>
            </div>
            <div className="column is-2">
              <h4>Total</h4>
            </div>
          </div>
          <CartItem
            productName="650ml Spectrum CBD oil (Full Spectrum) Hemp Extract (60mg / ml)"
            price={60}
            quantity={5}
            productUrl="https://bulma.io/images/placeholders/128x128.png"
          />
          <CartItem
            productName="650ml Spectrum CBD oil (Full Spectrum) Hemp Extract (60mg / ml)"
            price={60}
            quantity={5}
            productUrl="https://bulma.io/images/placeholders/128x128.png"
          />
          <div className="columns">
            <div className="column is-6" />
            <div className="column is-4">
              <h5>Cart Subtotal</h5>
            </div>
            <div className="column is-2">
              <h5>$ 600.00</h5>
            </div>
          </div>
          <div className="is-divider" />
          <div className="columns">
            <div className="column is-6">
              <h4>Shipping:</h4>
              <div>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="shippingType"
                      value="Free shipping"
                    />
                    Free shipping (2-3 days)
                  </label>
                </div>
              </div>
              <div className="m-t-sm">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="shippingType" />
                    Express shipping (1-2 days)
                  </label>
                </div>
              </div>
              <div className="button is-medium is-primary m-t-lg">
                Calculate shipping
              </div>
            </div>
            <div className="is-divider-vertical" />
            <div className="column is-6">
              <h4>Address:</h4>
              <div className="m-t-sm">
                To: 2355 Cove Ave, Los Angeles, CA 90030
              </div>
              <div className="m-t-sm">Or change an address</div>
              <div className="m-t-sm">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="button is-medium is-primary m-t-sm">
                Add a new address
              </div>
            </div>
          </div>
          <div className="is-divider" />
          <div className="columns">
            <div className="column has-text-centered">
              <h4>Cart subtotal (14 items)</h4>
              <h5>$680.00</h5>
              <a href="/checkout">
                <div className="button is-medium is-primary m-t-sm">
                  Proceed to checkout
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
