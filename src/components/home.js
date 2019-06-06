// @flow
/* eslint-disable flowtype/require-return-type */

import * as React from "react";
import styled from "styled-components";
import { Trans } from "@lingui/macro";
import BrandText from "./BrandText";
import { Colors, Images } from "../constants";

const topCategories = [
  {
    title: "Dab Pens",
    image: Images.Cat
  },
  {
    title: "Bongs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqHHuuXRYm7FIf9e9b-YMxg8QsMGZxrHHIuphZqVJE4-VjpMB"
  },
  {
    title: "Flower",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8C51_toDgtEXkFQZ6IJT4mMaxuw0jHrIg21WPa958zWxH-KK3g"
  },
  {
    title: "Cases",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8a1KPbUrXSwYGxAfkb-KZ8wSZggdmrVI2LQmEYNsgrc23eBgr"
  },
  {
    title: "Grinders",
    image:
      "https://cdn.shopify.com/s/files/1/1005/6270/products/1_edc620fc-07a7-4070-a7c8-82c175274c40_2048x.jpg?v=1509496027"
  },
  {
    title: "Pipes",
    image:
      "https://cdn.shopify.com/s/files/1/0010/5237/7149/products/sp-12.5cm-037_2_Color_changing_pipe_glass_pipe_spoon_pipe_weed_bowl_bong_Fumed_Purple_Color_Changing_Glass_Spoon_Pipe_w_Glass_Marble.jpg?v=1542091342"
  }
];

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

const ProductItem = styled(FeaturedItem)`
  height: 150px;
  background-color: ${Colors.white};
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

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
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
              Top Categories
            </BrandText>
          </Trans>
        </Title>
        <ProductContainer>
          {topCategories.map((item: { title: string, image: string }) => (
            <ProductItem key={item.title}>
              <ItemImage src={item.image} />
              {item.title}
            </ProductItem>
          ))}
        </ProductContainer>
      </Container>
    );
  }
}

export default Home;
