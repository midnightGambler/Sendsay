import React from "react";
import { useSelector } from "react-redux";
import SendedMessagesTableItem from "../SendedMessagesTableItem/SendedMessagesTableItem";

const SendedMessagesTable = () => {
  const messages = useSelector(state => state.messages);

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th colSpan="4">Тема</th>
            <th className="text-right">Статус</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(({ id, ...rest }) => (
            <SendedMessagesTableItem key={id} id={id} {...rest} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SendedMessagesTable;
