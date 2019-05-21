// @flow
/* eslint-disable flowtype/require-return-type */
import * as React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import BrandText from "./BrandText";
import { Trans } from "@lingui/macro"; // jsx text wrapper for translations
import { Colors } from "../constants";
import DropdownMenu from "./DropdownMenu";

// dropdown items
// tracking, delivery, inventory, & retail

const solutions = [
  {
    title: "Tracking",
    path: "/solutions"
  },
  {
    title: "Delivery",
    path: "/solutions"
  },
  {
    title: "Inventory",
    path: "/solutions"
  },
  {
    title: "Retail",
    path: "/solutions"
  }
];

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.pink};
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.pink};
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

const NavBarLink = styled.div`
  text-decoration: none;
`;

class NavigationBar extends React.Component<{}> {
  render() {
    return (
      <NavContainer>
        <NavBar>
          <NavBarLeft>
            <Trans>
              <NavBarLink to="/home">
                <BrandText
                  bold
                  size={20}
                  color={Colors.darkNavy}
                  hoverColor={Colors.white}
                >
                  PSYCLE
                </BrandText>
              </NavBarLink>
            </Trans>
          </NavBarLeft>
          <NavBarRight>
            <DropdownMenu menuTitle="Solutions" listItems={solutions} />
            <Trans>
              <NavBarLink to="/demo">
                <BrandText
                  size={20}
                  color={Colors.darkNavy}
                  hoverColor={Colors.white}
                >
                  Demo
                </BrandText>
              </NavBarLink>
            </Trans>
            <Trans>
              <NavBarLink to="/howitworks">
                <BrandText
                  size={20}
                  color={Colors.darkNavy}
                  hoverColor={Colors.white}
                >
                  How It Works
                </BrandText>
              </NavBarLink>
            </Trans>
          </NavBarRight>
        </NavBar>
      </NavContainer>
    );
  }
}

export default NavigationBar;
