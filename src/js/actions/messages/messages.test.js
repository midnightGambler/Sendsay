import { sendMessage, startSendMessage } from "./messages";

it("Should return action object (no parametrs)", () => {
  expect(sendMessage()).toMatchObject({
    type: "SEND_MESSAGE"
  });
});

it("Should return action object", () => {
  expect(sendMessage({ smthng: "str" })).toMatchObject({
    type: "SEND_MESSAGE",
    message: { smthng: "str" }
  });
});
