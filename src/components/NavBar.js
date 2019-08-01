// @flow
/* eslint-disable flowtype/require-return-type */
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BrandText from "./BrandText";
import { Trans } from "@lingui/macro"; // jsx text wrapper for translations
import Link from "redux-first-router-link";
import { Colors } from "../constants";
import DropdownMenu from "./DropdownMenu";

// dropdown items
// tracking, delivery, inventory, & retail

const solutions = [
  {
    title: "Tracking",
    path: { type: "TRACKING", payload: { category: "tracking" } }
  },
  {
    title: "Delivery",
    path: { type: "DELIVERY", payload: { category: "delivery" } }
  },
  {
    title: "Inventory",
    path: { type: "INVENTORY", payload: { category: "inventory" } }
  },
  {
    title: "Retail",
    path: { type: "RETAIL", payload: { category: "retail" } }
  }
];

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ Colors.pink };
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${ Colors.pink };
  padding: 30px;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 1024px;
`;

const NavBarLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const NavBarRight = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  max-width: 300px;
`;

const NavBarLink = styled(Link)`
  text-decoration: none;
`;

type PropsType = {
  // eslint-disable-next-line flowtype/no-weak-types
  navigate: (action: any) => void,
  pathname: string
};

class NavigationBar extends React.Component<PropsType> {
  render() {
    const { pathname } = this.props;
    const isHome = pathname === "HOME" || pathname === "ROOT";
    const isDemo = pathname === "DEMO";
    return (
      <NavContainer>
        <NavBar>
          <NavBarLeft>
            <NavBarLink to={ { type: "HOME", payload: { category: "home" } } }>
              <Trans>
                <BrandText
                  bold
                  size={ 20 }
                  color={ isHome ? Colors.white : Colors.darkNavy }
                  hoverColor={ Colors.white }
                >
                  PSYCLE
                </BrandText>
              </Trans>
            </NavBarLink>
          </NavBarLeft>
          <NavBarRight>
            {/* eslint-disable-next-line flowtype/no-weak-types */ }
            <DropdownMenu menuTitle="Solutions" listItems={ solutions }/>
            <Trans>
              <NavBarLink to={ { type: "DEMO", payload: { category: "demo" } } }>
                <BrandText
                  size={ 20 }
                  color={ isDemo ? Colors.white : Colors.darkNavy }
                  hoverColor={ Colors.white }
                >
                  Demo
                </BrandText>
              </NavBarLink>
            </Trans>
            <Trans>
              <NavBarLink
                to={ {
                  type: "HOW_IT_WORKS",
                  payload: { category: "howitworks" }
                } }
              >
                <BrandText
                  size={ 20 }
                  color={ Colors.darkNavy }
                  hoverColor={ Colors.white }
                >
                  How It Works
                </BrandText>
              </NavBarLink>
            </Trans>
            <Trans>
              <NavBarLink
                to={ {
                  type: "CART",
                  payload: { category: "cart" }
                } }
              >
                <BrandText
                  size={ 20 }
                  color={ Colors.darkNavy }
                  hoverColor={ Colors.white }
                >
                  Cart
                </BrandText>
              </NavBarLink>
              <NavBarLink
                to={ {
                  type: "CHECKOUT",
                  payload: { category: "checkout" }
                } }
              >
                <BrandText
                  size={ 20 }
                  color={ Colors.darkNavy }
                  hoverColor={ Colors.white }
                >
                  Checkout
                </BrandText>
              </NavBarLink>
            </Trans>
          </NavBarRight>
        </NavBar>
      </NavContainer>
    );
  }
}

// eslint-disable-next-line flowtype/no-weak-types
const mapStateToProps = ({ location }: { location: any }) => ({
  pathname: location.type
});

export default connect(mapStateToProps)(NavigationBar);
