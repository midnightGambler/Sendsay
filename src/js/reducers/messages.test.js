import messagesReducer from "./messages";

it("Should return defaultState", () => {
  expect(messagesReducer(undefined, {})).toEqual([]);
});

it("Should handle SEND_MESSAGE", () => {
  expect(
    messagesReducer([], {
      type: "SEND_MESSAGE",
      message: {
        id: 0,
        timestamp: Date.now(),
        subject: "test"
      }
    })
  ).toEqual([
    {
      id: expect.any(Number),
      timestamp: expect.any(Number),
      subject: "test"
    }
  ]);
});
