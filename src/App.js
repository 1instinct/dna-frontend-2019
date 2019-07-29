// @flow
import { hot } from "react-hot-loader/root";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import styles from '../css/App'
// import home from './components/home';
// import { pages, nextIndex, indexFromPath } from '../utils'
import styled from "styled-components";

import UniversalComponent from "./UniversalComponent";
import NavBar from "./components/NavBar";
import { push as Menu } from "react-burger-menu";
import { toggleSideMenu, toggleCartMenu } from "../src/actions/ui";
import type { DispatchType } from "../src/types/redux";

import SideMenu from "./components/SideMenu/";
import CartMenu from "./components/CartMenu";

type PropsType = {
  page: string,
  _toggleSideMenu: (open: boolean) => void,
  _toggleCartMenu: (open: boolean) => void,
  isOpen: boolean,
  cartIsOpen: boolean
};

type StateType = {
  loading: boolean,
  done: boolean,
  error: boolean
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

class App extends React.Component<PropsType, StateType> {
  render(): React.Node {
    const {
      page = "home",
      isOpen,
      cartIsOpen,
      _toggleSideMenu,
      _toggleCartMenu
    } = this.props;
    // const { done, loading } = this.state;
    // const buttonClass = `${styles[page]} ${loadingClass}`

    return (
      <AppContainer>
        <Menu
          style={styles}
          isOpen={isOpen}
          pageWrapId="panel"
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={({ isOpen: open }: { isOpen: boolean }): void =>
            _toggleSideMenu(open)
          }
          animation={"reveal"}
        >
          <SideMenu />
        </Menu>
        <Menu
          right
          style={styles}
          isOpen={cartIsOpen}
          pageWrapId="panel"
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={({ isOpen: open }: { isOpen: boolean }): void =>
            _toggleCartMenu(open)
          }
          animation={"reveal"}
        >
          <CartMenu />
        </Menu>
        <div id="panel">
          <NavBar />
          <UniversalComponent
            page={(): React.Node =>
              /* $FlowFixMe */
              import(`./components/${page}`)
            }
            onBefore={this.beforeChange}
            onAfter={this.afterChange}
            onError={this.handleError}
          />
        </div>
      </AppContainer>
    );
  }

  constructor(props: PropsType) {
    super(props);

    this.state = {
      loading: false,
      done: false,
      error: false
    };
  }

  beforeChange = ({ isSync }: { isSync: boolean }) => {
    if (!isSync) {
      this.setState({ loading: true, error: false });
    }
  };

  afterChange = ({
    isSync,
    isServer,
    isMount
  }: {
    isSync: boolean,
    isServer: boolean,
    isMount: boolean
  }) => {
    if (!isSync) {
      this.setState({ loading: false, error: false });
    } else if (!isServer && !isMount) {
      this.setState({ done: true, error: false });
    }
  };

  handleError = () => {
    this.setState({ error: true, loading: false });
  };
}

const mapStateToProps = ({
  page,
  ui
}: {
  page: string,
  ui: { sideMenuIsOpen: boolean, cartMenuIsOpen: boolean }
}): { page: string, isOpen: boolean, cartIsOpen: boolean } => ({
  page,
  isOpen: ui.sideMenuIsOpen,
  cartIsOpen: ui.cartMenuIsOpen
});

const mapDispatchToProps = (dispatch: DispatchType): {} =>
  bindActionCreators(
    {
      _toggleSideMenu: toggleSideMenu,
      _toggleCartMenu: toggleCartMenu
    },
    dispatch
  );

export default hot(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

const styles = {
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#3737a47"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: "500"
  }
};
