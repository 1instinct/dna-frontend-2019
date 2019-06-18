export const NEW_MESSAGE = "chat/NEW_MESSAGE";
export const SEND_MESSAGE = "chat/SEND_MESSAGE";
export const NEW_USER = "chat/NEW_USER";
export const OWN_DATA_RECEIVED = "chat/OWN_DATA_RECEIVED";
export const CHAT_ENDED = "chat/CHAT_ENDED";
export const CHAT_STARTED = "chat/CHAT_STARTED";
export const CHANGE_CHAT_SERVICE = "chat/CHANGE_CHAT_SERVICE";
export const RATE_GOOD = "chat/RATE_GOOD";
export const RATE_BAD = "chat/RATE_BAD";
export const CHAT_RATED = "chat/CHAT_RATED";

export const newMessage = ({
  id,
  authorId,
  customId,
  text,
  buttons,
  title,
  imageUrl,
  timestamp
}) => ({
  type: NEW_MESSAGE,
  payload: {
    id,
    authorId,
    customId,
    text,
    buttons,
    title,
    imageUrl,
    timestamp
  }
});

export const sendMessage = ({ text, customId }) => ({
  type: SEND_MESSAGE,
  payload: {
    text,
    customId: customId || String(Math.random()),
    timestamp: new Date()
  }
});

export const newUser = ({ id, name, email, avatarUrl }) => ({
  type: NEW_USER,
  payload: {
    id,
    name,
    email,
    avatarUrl
  }
});

export const ownDataReceived = ({ id }) => ({
  type: OWN_DATA_RECEIVED,
  payload: {
    id
  }
});

export const chatEnded = () => ({
  type: CHAT_ENDED
});

export const chatStarted = ({ chatId }) => ({
  type: CHAT_STARTED,
  payload: {
    chatId
  }
});

export const changeChatService = ({ chatService }) => ({
  type: CHANGE_CHAT_SERVICE,
  payload: {
    chatService
  }
});

export const rateGood = () => ({
  type: RATE_GOOD
});

export const rateBad = () => ({
  type: RATE_BAD
});

export const chatRated = ({ rate }) => ({
  type: CHAT_RATED,
  payload: {
    rate
  }
});
