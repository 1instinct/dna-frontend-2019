/* global process */
import Pusher from "pusher-js";

if (process.env.NODE_ENV === "development") {
  Pusher.logToConsole = true;
}

export const SOCKET_MESSAGE = "pusher/SOCKET_MESSAGE";

const channels = {
  "my-event": { channel: "MY_EVENT" }
};

export const initSocket = dispatch => {
  console.log("INIT PUSHER SOCKET");
  const socket = new Pusher(process.env.PUSHER_APP_KEY, {
    cluster: process.env.PUSHER_APP_CLUSTER
  });
  Object.keys(channels).forEach(channel => {
    console.log("SOCKET CONNECTED TO: ", channel);
    socket.bind(channel, data => {
      console.log("MESSAGE RECEIVED: ", JSON.stringify(data));
      dispatch({
        type: SOCKET_MESSAGE,
        channel: channels[channel],
        message: data
      });
    });
  });
};
