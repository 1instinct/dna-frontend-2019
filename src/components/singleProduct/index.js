// @flow
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { ProductType } from "../../types/products";
import type { StateType } from "../../types/redux";

import { updateProductSubtotal } from "../../actions/products";
import { addToCart } from "../../actions/cart";

import styled from "styled-components";
import Link from "redux-first-router-link";

type PropsType = {
  singleProduct: ProductType,
  _updateProductSubtotal: (id: string, change: number) => void,
  _addToCart: (item: ProductType) => void,
  products: ProductType[]
};

const ProductPageContainer = styled.div`
  display: block;
`;

const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProductInfo = styled.div`
  margin: 5%;
`;

const PriceLabel = styled.span`
  color: #29ace4 !important;
`;

const SubtotalContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
  width: 50%;
`;

const SubtotalControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubtotalButton = styled.button`
  width: 20%;
`;

const OrderSubmitButton = styled.button`
  width: 100%;
  margin-top: 5%;
`;

const ProductImage = styled.img`
  min-height: 400px;
  min-width: 400px;
  margin: 0 auto;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-evenly;
`;

const ProductAction = styled.div`
  font-size: 0.5em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 5%;
  text-align: center;
  align-items: center;
`;

const Heart = styled.div`
  background-image: url(https://enchanteddiamonds.com/assets/icons-031cc6b9b1ccef9a9ef955b1e9de07331b2470d73010a61a900cb93585ed1d5c.png);
  background-size: 500% 2000%;
  background-position: 50% 15.7894736842%;
  max-width: 32px !important;
  max-height: 32px !important;
  display: inline-block;
  min-width: 32px;
  min-height: 32px;
`;
const Share = styled.div`
  background-image: url(https://enchanteddiamonds.com/assets/icons-031cc6b9b1ccef9a9ef955b1e9de07331b2470d73010a61a900cb93585ed1d5c.png);
  background-size: 500% 2000%;
  background-position: 100% 21.0526315789%;
  max-width: 32px !important;
  max-height: 32px !important;
  display: inline-block;
  min-width: 32px;
  min-height: 32px;
`;
const Chat = styled.div`
  background-image: url(https://enchanteddiamonds.com/assets/icons-031cc6b9b1ccef9a9ef955b1e9de07331b2470d73010a61a900cb93585ed1d5c.png);
  background-size: 500% 2000%;
  background-position: 100% 31.5789473684%;
  max-width: 32px !important;
  max-height: 32px !important;
  display: inline-block;
  min-width: 32px;
  min-height: 32px;
`;

const RelatedContainer = styled.div`
  width: 100%;
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1024px;
  justify-self: center;
  margin: 0 auto;
`;

const RelatedLabel = styled.span`
  margin-left: 10%;
`;

const RelatedProduct = styled.div`
  flex: 1;
`;

// todo
const ProductLink = styled(Link)`
  text-decoration: none;
`;

const ProductThumbnail = styled.img`
  margin: 5%;
  max-height: 100px;
  max-width: 100%;
`;

// eslint-disable-next-line react/prop-types
class SingleProduct extends React.Component<PropsType, StateType> {
  render(): React.Node {
    const {
      singleProduct = {},
      _updateProductSubtotal,
      products,
      _addToCart
    } = this.props;
    const runningSubtotal =
      parseFloat(singleProduct.price) * parseFloat(singleProduct.subtotal);
    return (
      <ProductPageContainer>
        <OrderContainer>
          <ProductImage src={singleProduct.image} />

          <ProductInfo>
            <h1>{singleProduct.title}</h1>
            <h3>{singleProduct.subtitle}</h3>
            <p>{singleProduct.description}</p>

            <PriceLabel>
              <strong>${singleProduct.price}</strong>
            </PriceLabel>

            <ActionContainer>
              <ProductAction>
                <Heart />
                Add To
                <br />
                Favorites
              </ProductAction>

              <ProductAction>
                <Share />
                Share
              </ProductAction>

              <ProductAction>
                <Chat />
                Chat With
                <br />
                An Expert
              </ProductAction>
            </ActionContainer>

            <span>QTY</span>
            <SubtotalContainer>
              <SubtotalControls>
                <SubtotalButton
                  onClick={() => _updateProductSubtotal(singleProduct.id, -1)}
                >
                  -
                </SubtotalButton>

                <h3>{singleProduct.subtotal}</h3>

                <SubtotalButton
                  onClick={() => _updateProductSubtotal(singleProduct.id, +1)}
                >
                  +
                </SubtotalButton>
              </SubtotalControls>
              <OrderSubmitButton onClick={() => _addToCart(singleProduct)}>
                ${runningSubtotal.toFixed(2)} Add To Cart
              </OrderSubmitButton>
            </SubtotalContainer>
          </ProductInfo>
        </OrderContainer>
        <section>
          <h2>
            <RelatedLabel>Related</RelatedLabel>
          </h2>
          <RelatedContainer>
            {products.map((product, i) => {
              return (
                <div key={product.id}>
                  <ProductLink
                    to={{
                      type: "SINGLE_PRODUCT",
                      payload: { productId: product.id }
                    }}
                  >
                    <h4>{product.title}</h4>
                    <ProductThumbnail src={product.image} />
                  </ProductLink>
                </div>
              );
            })}
          </RelatedContainer>
        </section>
      </ProductPageContainer>
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
      _addToCart: addToCart,
      _updateProductSubtotal: updateProductSubtotal
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
