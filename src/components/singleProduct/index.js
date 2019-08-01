// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { ProductType } from "../../types/products";
import type { StateType } from "../../types/redux";
import { updateProductQuantity } from "../../actions/products";
import { addProductCart } from "../../actions/cart";

import styled from "styled-components";
import Link from "redux-first-router-link";

type PropsType = {
  singleProduct: ProductType,
  _updateProductQuantity: (id: string, change: number) => void,
  products: ProductType[]
};

// eslint-disable-next-line react/prop-types
class SingleProduct extends React.Component<PropsType, StateType> {
  state = {
    quantity: 1
  };

  render() {
    const { singleProduct = {}, _updateProductQuantity, _addProductCart } = this.props;
    const { quantity } = this.state;
    singleProduct.quantity = quantity;
    const itemWording = quantity > 1 ? 'items' : 'item';
    const subtotal = (singleProduct.price * quantity).toFixed(2);
    return (
      <section className="section content">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-6">
              <figure className="image is-square">
                <img src={ singleProduct.image }></img>
              </figure>
            </div>
            <div className="column is-6">
              <div className="content">
                <h1>{ singleProduct.title }</h1>
                <h3>{ singleProduct.subtitle }</h3>
                <p>{ singleProduct.description }</p>
              </div>
              <h1>${ singleProduct.price }</h1>
              <div className="columns is-centered m-t-md">
                <div className="column">
                  <div className='has-text-centered'>
                    <span className="icon"><i className="far fa-lg fa-heart"></i></span>
                  </div>
                  <div className='has-text-centered'>Add to favorites</div>
                </div>
                <div className="column">
                  <div className='has-text-centered'>
                    <span className="icon is-medium"><i className="far fa-lg fa-share-square"></i></span>
                  </div>
                  <div className='has-text-centered'>Share</div>
                </div>
                <div className="column">
                  <div className='has-text-centered'>
                    <span className="icon"><i className="fas fa-lg fa-phone"></i></span>
                  </div>
                  <div className='has-text-centered'>Chat with an expert</div>
                </div>
              </div>
              <div className="level">
                <div className="level-item">
                  <div className="button is-large is-primary m-t-lg"
                       onClick={ () => this.setState({ quantity: quantity - 1 }) }>-
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Quantity</p>
                    <p className="title">{ quantity }</p>
                  </div>
                </div>
                <div className="level-item">
                  <div className="button is-large is-primary m-t-lg"
                       onClick={ () => this.setState({ quantity: quantity + 1 }) }>+
                  </div>
                </div>
              </div>
              <div className="has-text-centered">
                <div className="button is-large is-primary m-t-lg"
                     onClick={ () => _addProductCart({ product: singleProduct }) }>
                  Add to cart ({ quantity } { itemWording }) - ${ subtotal }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ location, products }: StateType): any => {
  return {
    singleProduct: products.products[location.payload.productId],
    products: products.productsList.filter(
      (product: ProductType) => product.id !== location.payload.productId
    )
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _updateProductQuantity: updateProductQuantity,
      _addProductCart: addProductCart,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
