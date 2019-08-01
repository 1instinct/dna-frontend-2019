// @flow
import * as React from "react";
import type { StateType } from "../../types/redux";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
class Checkout extends React.Component<PropsType> {
  render() {
    const { products } = this.props;
    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const tax = subtotal * 0.1;
    const shipping = 10;
    const total = subtotal + tax + shipping;
    return (
      <section className="section content">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <h3>Checkout</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <h4>Billing details:</h4>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label className="label">First name</label>
                    <div className="control">
                      <input className="input" type="text" placeholder=""></input>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Last name</label>
                    <div className="control">
                      <input className="input" type="text" placeholder=""></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input" type="text" placeholder=""></input>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input className="input" type="text" placeholder=""></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Birthday</label>
                <div className="control">
                  <input className="input" type="text" placeholder=""></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input className="input" type="text" placeholder=""></input>
                </div>
              </div>
              <div className="button is-medium is-primary m-t-lg">Continue</div>
              <div className="is-divider"></div>
              <h4>Address</h4>
              <div className="is-divider"></div>
              <h4>Shipping Method</h4>
            </div>
            <div className="column is-6">
              <h4>Order Details</h4>
              <div className="box">
                <table className="table is-striped">
                  <thead>
                  <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  { products.map(product => <tr>
                    <td>{ product.title }</td>
                    <td>{ product.quantity }</td>
                    <td>$ { product.price.toFixed(2) }</td>
                  </tr>) }
                  </tbody>
                  <tfoot>
                  <tr>
                    <th colSpan={ 2 }>Subtotal</th>
                    <th>$ { subtotal.toFixed(2) }</th>
                  </tr>
                  <tr>
                    <th colSpan={ 2 }>Tax</th>
                    <th>$ { tax.toFixed(2) }</th>
                  </tr>
                  <tr>
                    <th colSpan={ 2 }>Shipping</th>
                    <th>$ { shipping.toFixed(2) }</th>
                  </tr>
                  <tr>
                    <th colSpan={ 2 }>Total</th>
                    <th>$ { total.toFixed(2) }</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <div className="box">
                <div className="columns is-vcentered">
                  <div className="column is-4">
                    <p className="bold is-size-6 has-text-weight-semibold">Enter a COUPON:</p>
                  </div>
                  <div className="column is-8">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Enter your 6 digit code here..."></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="button is-medium is-primary right is-pulled-right">Submit Coupon</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <h5>Authorize Net AIM</h5>
                <h5>Now you're paying with</h5>
                <div className="field">
                  <label className="label">Card Number</label>
                  <div className="control">
                    <input className="input" type="text" placeholder=""></input>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Expiration Date</label>
                      <div className="control">
                        <input className="input" type="text" placeholder=""></input>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Security Code</label>
                      <div className="control">
                        <input className="input" type="text" placeholder=""></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="button is-medium is-primary right is-pulled-right">Confirm and place Order</div>
                  </div>
                </div>
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

export default connect(mapStateToProps)(Checkout);
