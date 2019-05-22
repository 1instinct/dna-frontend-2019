// @flow
import { hot } from "react-hot-loader/root";
import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
// import styles from '../css/App'
// import home from './components/home';
// import { pages, nextIndex, indexFromPath } from '../utils'
import UniversalComponent from "./UniversalComponent";

type PropsType = {
  history: {
    push: (pagepath: string) => void,
    location: {
      pathname: string
    },
    listen: (callback: (path: { pathname: string }) => void) => void
  }
};

type StateType = {
  index: number,
  loading: boolean,
  done: boolean,
  error: boolean
};

const pages = ["home"];
const nextIndex = (i: number): number => ++i % pages.length;
const indexFromPath = (path: string): number => {
  path = path === "/" ? "/Foo" : path;
  return pages.indexOf(path.substr(1));
};

const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const { store } = configureStore(preloadedState);

class App extends React.Component<PropsType, StateType> {
  render(): React.Node {
    // const { index, done, loading } = this.state;
    const page = pages[0];
    // const buttonClass = `${styles[page]} ${loadingClass}`

    return (
      <Provider store={store}>
        <UniversalComponent
          page={(): React.Node =>
            /* $FlowFixMe */
            import(`./components/${page}`)
          }
          onBefore={this.beforeChange}
          onAfter={this.afterChange}
          onError={this.handleError}
        />
      </Provider>
    );
  }

  constructor(props: PropsType) {
    super(props);

    const { history } = props;
    const index = indexFromPath(history.location.pathname);

    this.state = {
      index,
      loading: false,
      done: false,
      error: false
    };
  }

  unregisterHistoryListener = null;

  componentDidMount() {
    const { history } = this.props;
    this.unregisterHistoryListener = history.listen(
      ({ pathname }: { pathname: string }) => {
        const index = indexFromPath(pathname);
        this.setState({ index });
      }
    );
  }

  componentWillUnmount() {
    if (this.unregisterHistoryListener) {
      this.unregisterHistoryListener();
    }
  }

  changePage = () => {
    const { loading, index } = this.state;
    const { history } = this.props;
    if (loading) return;

    const idx = nextIndex(index);
    const page = pages[idx];

    history.push(`/${page}`);
  };

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

  buttonText(): string {
    const { loading, error } = this.state;
    if (error) return "ERROR";
    return loading ? "LOADING..." : "CHANGE PAGE";
  }
}

export default hot(App);
