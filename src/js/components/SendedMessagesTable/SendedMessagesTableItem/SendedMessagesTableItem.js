import React, { useState, useEffect } from "react";
import { sendsay } from "../../../utils";

const statusesText = {
  error: "Ошибка",
  inProgress: "В очереди",
  success: "Отправлено"
};

const SendedMessagesTableItem = ({ timestamp, subject, id }) => {
  const [status, setStatus] = useState(0);

  const checkStatus = () => {
    sendsay
      .request({
        action: "track.get",
        id
      })
      .then(({ obj }) => {
        if (Number(obj.status) > -1) {
          setTimeout(() => checkStatus(), 3000);
        } else {
          setStatus(Number(obj.status));
        }
      });
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const formattedStatus = (() => {
    if (status === -1) {
      return "success";
    } else if (status < -1) {
      return "error";
    } else return "inProgress";
  })();

  return (
    <tr>
      <td>
        {new Date(timestamp).toLocaleDateString("ru", {
          month: "long",
          day: "numeric"
        })}
      </td>
      <td colSpan="4">{subject}</td>
      <td className={`text-${formattedStatus} text-right`}>
        {statusesText[formattedStatus]}
      </td>
    </tr>
  );
};

export default SendedMessagesTableItem;
