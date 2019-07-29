// @flow
/* eslint-disable flowtype/require-return-type */

import * as React from "react";
import styled from "styled-components";
import { Trans } from "@lingui/macro";
import { bindActionCreators } from "redux";
import BrandText from "./BrandText";
import { Colors } from "../constants";
import type { ProductsArrayType, ProductType } from "../types/products";
import { getProducts } from "../actions/products";
import Link from "redux-first-router-link";
import { connect } from "react-redux";
import type { StateType, DispatchType } from "../types/redux";

type PropsType = {
  products: ProductsArrayType,
  _getProducts: () => void
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
`;

const FeaturedContainer = styled.div`
  width: 100%;
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  background-color: ${Colors.lightGrey};
  & div:first-child {
    margin-right: 10px;
    background: url(https://square-production.s3.amazonaws.com/files/83b1da5e58d2b0e1a1cdc52114c4f84ffaf6612e/original.png);
    background-repeat: no-repeat;
    background-position: center;
  }
  & div:last-child {
    margin-left: 10px;
    background: url(https://cdn6.aptoide.com/imgs/c/8/3/c83f09b768de9f7311afd2b256661795_icon.png?w=240);
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
`;

const FeaturedItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${Colors.pink};
  height: 300px;
  cursor: pointer;
`;

const ProductItem = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  height: 150px;
  background-color: ${Colors.white};
`;

const ProductLink = styled(ProductItem)`
  text-decoration: none;
  cursor: pointer;
`;

const ItemImage = styled.img`
  max-height: 100px;
  max-width: 100%;
`;

const Title = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 1024px;
  padding: 15px 0px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${Colors.darkNavy};
`;

class Home extends React.Component<PropsType> {
  componentDidMount() {
    const { _getProducts } = this.props;
    _getProducts();
  }
  render() {
    return (
      <Container>
        <div>
          <h1 className="googleFont">
            <em>Hello I am a googleFont</em>
          </h1>
          <p className="googleFont">Hello I am a googleFont</p>
          <h1 className="typekitFont">
            <em>Hello I am a typeKit font</em>
          </h1>
          <p className="typekitFont">Hello I am a typeKit font</p>
        </div>
        <Title>
          <Trans>
            <BrandText color={Colors.darkNavy} bold size={25}>
              Featured
            </BrandText>
          </Trans>
        </Title>
        <FeaturedContainer>
          <FeaturedItem>
            <Trans>
              <BrandText>Delivery</BrandText>
            </Trans>
          </FeaturedItem>
          <FeaturedItem>
            <Trans>Inventory</Trans>
          </FeaturedItem>
        </FeaturedContainer>
        <Title>
          <Trans>
            <BrandText color={Colors.darkNavy} bold size={25}>
              Top Products
              <i className="bts bt-spinner bt-spin" />
            </BrandText>
          </Trans>
        </Title>

        <ProductContainer>
          {this.props.products.map((item: ProductType) => (
            <ProductLink
              key={item.id}
              to={{ type: "SINGLE_PRODUCT", payload: { productId: item.id } }}
            >
              <ItemImage src={item.image} />
              {item.title}
            </ProductLink>
          ))}
        </ProductContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ products: { products } }: StateType) => ({
  products: Object.values(products)
});

const mapDispatchToProps = (dispatch: DispatchType) =>
  bindActionCreators(
    {
      _getProducts: getProducts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
