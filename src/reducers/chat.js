import {
  NEW_MESSAGE,
  SEND_MESSAGE,
  NEW_USER,
  OWN_DATA_RECEIVED,
  CHAT_STARTED,
  CHANGE_CHAT_SERVICE,
  CHAT_ENDED,
  CHAT_RATED,
  RATE_GOOD,
  RATE_BAD
} from "../actions/chat";

const initialState = {
  events: [
    {
      id: "bot-message",
      authorId: "bot",
      text: "Hello, how can I help you?",
      timestamp: Date.now()
    }
  ],
  users: {
    byIds: {
      bot: {
        id: "bot",
        name: "Bot",
        avatarUrl:
          "https://static.staging.livechatinc.com/1520/P10064EDGF/7970c9d036275c2ee9282d15535ef57b/botengine-avatar.png"
      }
    },
    ownId: null,
    currentAgent: "bot"
  },
  chatState: "NOT_CHATTING",
  widgetState: "MAXIMIZED",
  chatService: "botEngine",
  rate: "none"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      if (action.payload.customId === "VISITOR_CHAT_HISTORY") {
        return state;
      }
      if (
        !state.filter(event => {
          return (
            (event.customId && event.customId === action.payload.customId) ||
            (event.id && event.id === action.payload.id)
          );
        }).length
      ) {
        return {
          ...state,
          events: [...state.events, action.payload]
        };
      }
      return state;
    case SEND_MESSAGE:
      if (action.payload.customId === "VISITOR_CHAT_HISTORY") {
        return state;
      }
      return {
        ...state,
        events: [
          ...state.events,
          {
            ...action.payload,
            status: "SENDING",
            own: true
          }
        ]
      };
    case NEW_USER:
      return {
        ...state,
        users: {
          ...state.users,
          currentAgent: action.payload.id,
          byIds: {
            ...state.users.byIds,
            [action.payload.id]: action.payload
          }
        }
      };
    case OWN_DATA_RECEIVED:
      return {
        ...state,
        users: {
          ...state.users,
          ownId: action.payload.id,
          byIds: {
            ...state.users.byIds,
            [action.payload.id]: {
              ...action.payload,
              name: "Client"
            }
          }
        }
      };
    case CHAT_STARTED:
      return {
        ...state,
        chatState: "CHATTING",
        chatService: "LiveChat"
      };
    case CHANGE_CHAT_SERVICE:
      return {
        ...state,
        chatService: action.payload.chatService
      };
    case CHAT_ENDED:
      return {
        ...state,
        chatState: "ENDED"
      };
    case CHAT_RATED:
      return {
        ...state,
        rate: action.payload.rate || state.rate
      };
    case RATE_GOOD:
      return {
        ...state,
        rate: "good"
      };
    case RATE_BAD:
      return {
        ...state,
        rate: "bad"
      };

    default:
      return state;
  }
};
