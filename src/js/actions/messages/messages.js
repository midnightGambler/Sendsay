import { sendsay } from "../../utils";

export const sendMessage = (message = {}) => ({
  type: "SEND_MESSAGE",
  message
});

export const startSendMessage = payload => {
  return dispatch =>
    sendsay.request(payload).then(res => {
      dispatch(
        sendMessage({
          id: res["track.id"],
          timestamp: Date.now(),
          subject: payload.letter.subject
        })
      );
    });
};
