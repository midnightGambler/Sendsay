import React, { useState } from "react";
import ReactDom from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { startSendMessage } from "./js/actions/messages/messages";
import store from "./js/store";
import Card from "./js/components/UI/Card/Card";
import Form from "./js/components/EmailForm";
import SendedMessagesTable from "./js/components/SendedMessagesTable/SendedMessagesTable/SendedMessagesTable";
import Logo from "./js/components/Logo/Logo";
import "./styles/style.scss";

// Логин: d611606@urhen.com
// Пароль: quu4Taqui

const App = () => {
  const [messageState, setMessageState] = useState({ isSended: false, to: "" });

  const dispatch = useDispatch();
  const isThereAnyMessages = useSelector(state => state.messages.length > 0);

  const normilizeData = formData => ({
    action: "issue.send.test",
    letter: {
      subject: formData.subject.value,
      ["from.name"]: formData["from.name"].value,
      ["from.email"]: formData["from.email"].value,
      ["to.name"]: formData["to.name"].value,
      message: { text: formData.message.value },
      attaches: [
        {
          name: "имя файла",
          content: "содержимое файла закодированное base64",
          encoding: "base64"
        },
        ...formData.files
      ]
    },
    sendwhen: "test",
    mca: [formData["to.email"].value]
  });

  const onSubmitForm = data =>
    dispatch(startSendMessage(normilizeData(data))).then(() =>
      setMessageState({ isSended: true, to: data["to.email"].value })
    );

  return (
    <div className="container">
      <Logo />
      {messageState.isSended ? (
        <Card
          title="Сообщение поставлено в очередь на отправку"
          subtitle={`Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты получателя «${messageState.to}» со скоростью электронов.`}
          className="card-centered"
        />
      ) : (
        <Card className="card-mb card-dropzone" title="Отправлялка сообщений">
          <Form onSubmit={onSubmitForm} />
        </Card>
      )}
      {isThereAnyMessages ? (
        <Card className="card-transparent" title="Отправленные сообщения">
          <SendedMessagesTable />
        </Card>
      ) : (
        <Card
          className="card-transparent"
          title="Отправленные сообщения"
          subtitle="Сообщения ещё не отправлялись"
        />
      )}
    </div>
  );
};

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
