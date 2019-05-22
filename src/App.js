// @flow
import { hot } from "react-hot-loader/root";
import * as React from "react";
import { connect } from "react-redux";
// import styles from '../css/App'
// import home from './components/home';
// import { pages, nextIndex, indexFromPath } from '../utils'
import UniversalComponent from "./UniversalComponent";
import NavBar from "./components/NavBar";

type PropsType = {
  page: string
};

type StateType = {
  loading: boolean,
  done: boolean,
  error: boolean
};

class App extends React.Component<PropsType, StateType> {
  render(): React.Node {
    const { page = "home" } = this.props;
    // const { done, loading } = this.state;
    // const buttonClass = `${styles[page]} ${loadingClass}`

    return (
      <div>
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

const mapStateToProps = ({ page }: { page: string }): { page: string } => ({
  page
});

export default hot(connect(mapStateToProps)(App));
