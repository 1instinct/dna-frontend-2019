// @flow
import { ProductActions } from "../types/products";
import type { ProductActionsType, ProductType } from "../types/products";
// import { Images } from '../constants';

const products: { [string]: ProductType } = {
  product_1: {
    title: "Lafayette",
    subtitle: "Round Engagement Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/454R/glamour-p-lg.jpg",
    id: "product_1",
    price: "2,300",
    quantity: 0,
    description:
      "The Lafayette Round engagement ring in 14K White Gold is a dazzling design. The pavé shank and halo are set with full-cut round diamonds. All our rings are custom-made in New York City for your diamond and finger size, so the proportions will all be perfect and the side stones will match."
  },
  product_2: {
    title: "Orchard",
    subtitle: "Round Engamenet Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/426R/glamour-p-lg.jpg",
    id: "product_2",
    price: "2,300",
    quantity: 0,
    description:
      "The Orchard Round engagement ring in 14K White Gold is an elegant and eye-catching design. The center stone is set in four prongs, and the shank is pavé-set with full-cut round diamonds. All of our rings are custom-made in New York City for your diamond and finger size."
  },
  product_3: {
    title: "Tribeca",
    subtitle: "Round Engagement Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/450R/glamour-p-lg.jpg",
    id: "product_3",
    price: "3,300",
    quantity: 0,
    description:
      "The Tribeca Round three-stone engagement ring in 14K White Gold is a minimalistic yet striking design. The side stones will perfectly match the color and clarity you use for the center stone. The setting itself will also be custom made in New York City for your diamonds and finger size, so you can be confident that everything will fit together perfectly."
  },
  product_4: {
    title: "Bowery",
    subtitle: "Round Engagement Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/402R/glamour-p-lg.jpg",
    id: "product_4",
    price: "650",
    quantity: 0,
    description:
      "The Bowery Round double-prong solitaire engagement ring in 14K White Gold is a modest design with just the right amount of flair. The center stone is set in four pairs of prongs, with extra support on the sides. All of our rings are custom-made in New York city for your diamond and finger size."
  },
  product_5: {
    title: "Delancey",
    subtitle: "Round Engagement Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/413R/glamour-p-lg.jpg",
    id: "product_5",
    price: "900",
    quantity: 0,
    description:
      "The Delancey Round in 14K White Gold is the classic six-prong solitaire engagement ring. It is a timeless design that you can't go wrong with. All of our rings are custom-made in New York City for your diamond and finger size."
  },
  product_6: {
    title: "Whitehall",
    subtitle: "Round Engagement Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/447R/glamour-p-lg.jpg",
    id: "product_6",
    price: "1,000",
    quantity: 0,
    description:
      "The Whitehall Round split-shank solitaire engagement ring in 14K White Gold is the unconventional alternative to a regular solitaire. The center stone is securely set in a 4-prong cathedral-style basket. All of our rings are custom-made in New York City for your diamond and finger size."
  },
  product_7: {
    title: "Lexington",
    subtitle: "Pear Engagement Ring",
    image:
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/409R/glamour-p-lg.jpg",
    id: "product_7",
    price: "3,100",
    quantity: 0,
    description:
      "The Lexington Pear three-stone engagement ring in 14K White Gold is a dainty yet striking design. The center stone is flanked by two hand-picked tapered baguette diamonds that will perfectly match its color and clarity. The setting will be custom made in New York City to fit your diamonds and finger size."
  }
};
const initialState = {
  products,
  productsList: Object.values(products),
  singleProduct: {}
};

type ProductsStateType = typeof initialState;

export default (
  state: ProductsStateType = initialState,
  action: ProductActionsType
): ProductsStateType => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT_ID:
      return {
        ...state,
        singleProduct: action.product
      };
    case ProductActions.UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: { ...state.products, [action.productId]: action.product },
        productsList: Object.values({
          ...state.products,
          [action.productId]: action.product
        })
      };
    default:
      return state;
  }
};
