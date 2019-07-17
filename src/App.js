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
import { toggleSideMenu } from "../src/actions/ui";

import SideMenu from "./components/SideMenu/";

type PropsType = {
  page: string,
  _toggleSideMenu: (open: boolean) => void,
  isOpen: boolean
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

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  width: "100%";
  z-index: 1000;
`;

class App extends React.Component<PropsType, StateType> {
  render(): React.Node {
    const { page = "home", isOpen, _toggleSideMenu } = this.props;
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
          onStateChange={({ isOpen: open }) => _toggleSideMenu(open)}
        >
          <SideMenu />
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
  ui: { sideMenuIsOpen: boolean }
}): { page: string, isOpen: boolean } => ({
  page,
  isOpen: ui.sideMenuIsOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _toggleSideMenu: toggleSideMenu
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
