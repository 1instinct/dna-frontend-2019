import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Maximized from "./Maximized";
import Minimized from "./Minimized";
import {
  ThemeProvider,
  FixedWrapper,
  darkTheme,
  elegantTheme,
  purpleTheme,
  defaultTheme,
  ChatIcon
} from "@livechat/ui-kit";
import { rateGood, rateBad, sendMessage } from "../../actions/chat";

const themes = {
  defaultTheme: {
    FixedWrapperMaximized: {
      css: {
        boxShadow: "0 0 1em rgba(0, 0, 0, 0.1)"
      }
    }
  },
  purpleTheme: {
    ...purpleTheme,
    TextComposer: {
      ...purpleTheme.TextComposer,
      css: {
        ...purpleTheme.TextComposer.css,
        marginTop: "1em"
      }
    },
    OwnMessage: {
      ...purpleTheme.OwnMessage,
      secondaryTextColor: "#fff"
    }
  },
  elegantTheme: {
    ...elegantTheme,
    Message: {
      ...darkTheme.Message,
      secondaryTextColor: "#fff"
    },
    OwnMessage: {
      ...darkTheme.OwnMessage,
      secondaryTextColor: "#fff"
    }
  },
  darkTheme: {
    ...darkTheme,
    Message: {
      ...darkTheme.Message,
      css: {
        ...darkTheme.Message.css,
        color: "#fff"
      }
    },
    OwnMessage: {
      ...darkTheme.OwnMessage,
      secondaryTextColor: "#fff"
    },
    TitleBar: {
      ...darkTheme.TitleBar,
      css: {
        ...darkTheme.TitleBar.css,
        padding: "1em"
      }
    }
  }
};

const commonThemeButton = {
  fontSize: "16px",
  padding: "1em",
  borderRadius: ".6em",
  margin: "1em",
  cursor: "pointer",
  outline: "none",
  border: 0
};

const themePurpleButton = {
  ...commonThemeButton,
  background: "linear-gradient(to right, #6D5BBA, #8D58BF)",
  color: "#fff"
};

const themeDarkButton = {
  ...commonThemeButton,
  background: "rgba(0, 0, 0, 0.8)",
  color: "#fff"
};

const themeDefaultButton = {
  ...commonThemeButton,
  background: "#427fe1",
  color: "#fff"
};

const themeElegantButton = {
  ...commonThemeButton,
  background: "#000",
  color: "#D9A646"
};

class Chat extends React.Component {
  state = {
    theme: "defaultTheme"
  };

  handleThemeChange = ({ target }) => {
    console.log("target.name", target.name);
    this.setState({
      theme: target.name + "Theme"
    });
  };

  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <div style={{}}>
          <FixedWrapper.Root maximizedOnInit={false}>
            <FixedWrapper.Maximized>
              <Maximized {...this.props} />
            </FixedWrapper.Maximized>
            <FixedWrapper.Minimized>
              <Minimized {...this.props} />
            </FixedWrapper.Minimized>
          </FixedWrapper.Root>
        </div>
      </ThemeProvider>
    );
  }
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const parseTimestamp = timestamp => {
  const date = new Date(timestamp);
  return `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getHours()}:${date.getMinutes()}`;
};

const parseMessages = messages =>
  messages
    .map(message => ({
      ...message,
      parsedDate: parseTimestamp(message.timestamp)
    }))
    .reduce(
      (result, current) => {
        const previous = result[result.length - 1];
        if (
          !previous.length ||
          previous[previous.length - 1].authorId === current.authorId
        ) {
          result[result.length - 1].push(current);
          return result;
        }
        result.push([current]);
        return result;
      },
      [[]]
    );

const mapStateToProps = ({ chat }) => {
  return {
    events: parseMessages(chat.events),
    users: chat.users,
    ownId: chat.users.ownId,
    currentAgent: chat.users.byIds[chat.users.currentAgent],
    rate: chat.rate,
    chatState: chat.state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onMessageSend: sendMessage,
      _sendMessage: sendMessage,
      _rateGood: rateGood,
      _rateBad: rateBad
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
