// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { ProductType } from "../../types/products";
import type { StateType } from "../../types/redux";
import { updateProductQuantity } from "../../actions/products";

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
    product: {
      name: "650ml Spectrum CBD oil (Full Spectrum) Hemp Extract (60mg / ml)",
      subtitle: "650ml Spectrum CBD oil (Full Spectrum) Hemp Extract (60mg / ml)",
      description: "650ml Spectrum CBD oil (Full Spectrum) Hemp Extract (60mg / ml)",
      price: 15,
    }
  };

  render() {
    const { singleProduct = {}, _updateProductQuantity, products } = this.props;
    const { product } = this.state;
    const subtotal =
      parseFloat(singleProduct.price) * parseFloat(singleProduct.quantity);
    return (
      <section className="section content">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-6">
              <figure className="image is-square">
                <img src="https://bulma.io/images/placeholders/480x480.png"></img>
              </figure>
            </div>
            <div className="column is-6">
              <div className="content">
                <h1>{ product.name }</h1>
                <h3>{ product.subtitle }</h3>
                <p>{ product.description }</p>
              </div>
              <h1>${ product.price.toFixed(2) }</h1>
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
                  <div className="button is-large is-primary m-t-lg">-</div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Quantity</p>
                    <p className="title">150</p>
                  </div>
                </div>
                <div className="level-item">
                  <div className="button is-large is-primary m-t-lg">+</div>
                </div>
              </div>
              <div className="has-text-centered">
                <div className="button is-large is-primary m-t-lg">Add to cart</div>
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
      _updateProductQuantity: updateProductQuantity
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
