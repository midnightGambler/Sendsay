import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { isEmail } from "validator";
import InputGroup from "./UI/InputGroup/InputGroup";
import Input from "./UI/Input/Input";
import Textarea from "./UI/Textarea/Textarea";
import Button from "./UI/Button/Button";
import DropzoneOverlay from "./UI/DropzoneOverlay/DropzoneOverlay";
import SVG from "react-inlinesvg";
import Paperclip from "../../svg/paperclip.svg";
import AttachedFilesList from "./AttachedFilesList/AttachedFilesList";
import { fileToBase64 } from "../utils";

const EmailForm = props => {
  const [data, setData] = useState({
    files: [],
    "from.email": {
      value: "",
      type: "email",
      isRequired: true
    },
    "from.name": {
      value: "",
      type: "text",
      isRequired: true
    },
    "to.name": {
      value: "",
      type: "text",
      isRequired: true
    },
    "to.email": {
      value: "",
      type: "email",
      isRequired: true
    },
    subject: {
      value: "",
      type: "text",
      isRequired: true
    },
    message: {
      value: "",
      type: "text",
      isRequired: true
    }
  });
  const [errors, setErrors] = useState({});
  const [isSending, setSendingState] = useState(false);

  const validateData = () => {
    let err = {};
    Object.keys(data).map(key => {
      if (data[key].isRequired) {
        if (key.includes("email")) {
          if (!data[key].value) {
            err = { ...err, [key]: "Обязательное поле" };
          } else if (!isEmail(data[key].value)) {
            err = { ...err, [key]: "Невалидный email" };
          }
        } else if (data[key].value.length === 0) {
          err = { ...err, [key]: "Обязательное поле" };
        }
      }
    });
    setErrors(err);
    return err;
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    setSendingState(true);
    const err = validateData();
    Object.keys(err).length === 0
      ? props.onSubmit(data)
      : setSendingState(false);
  };

  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: {
        value: e.target.value,
        type: e.target.type,
        isRequired: true
      }
    });
  };

  const onDrop = files => {
    const filesArr = [];

    files.forEach(file => {
      new Promise(resolve => {
        fileToBase64(file)
          .then(str => {
            filesArr.push({
              name: file.name,
              content: str,
              encoding: "base64"
            });
          })
          .then(() => resolve());
      }).then(() => setData({ ...data, files: [...filesArr, ...data.files] }));
    });
  };

  const handleRemoveFile = selectedFileName => {
    const files = data.files.filter(({ name }) => name !== selectedFileName);
    setData({ ...data, files });
  };

  return (
    <Dropzone
      maxSize={5000000}
      accept="image/jpeg, image/png, image/gif, application/msword, application/excel, application/pdf, application/x-zip-compressed"
      noClick
      noKeyboard
      onDrop={onDrop}
    >
      {({ getRootProps, getInputProps, isDragActive, open }) => (
        <form {...getRootProps()} onSubmit={onSubmit.bind(null, data)}>
          <InputGroup
            label="От кого"
            inputProps={[
              {
                type: "text",
                name: "from.name",
                placeholder: "Имя",
                onChange,
                value: data["from.name"].value,
                error: errors["from.name"]
              },
              {
                type: "text",
                name: "from.email",
                placeholder: "Email",
                onChange,
                value: data["from.email"].value,
                error: errors["from.email"]
              }
            ]}
          />
          <InputGroup
            label="Кому"
            inputProps={[
              {
                type: "text",
                name: "to.name",
                placeholder: "Имя",
                onChange,
                value: data["to.name"].value,
                error: errors["to.name"]
              },
              {
                type: "text",
                name: "to.email",
                placeholder: "Email",
                onChange,
                value: data["to.email"].value,
                error: errors["to.email"]
              }
            ]}
          />
          <Input
            className="input-mb"
            label="Тема письма"
            onChange={onChange}
            type="text"
            name="subject"
            value={data.subject.value}
            error={errors.subject}
          />
          <Textarea
            label="Сообщение"
            name="message"
            rows="7"
            onChange={onChange}
            value={data.message.value}
            error={errors.message}
          />
          {data.files.length > 0 && (
            <AttachedFilesList
              handleRemoveFile={handleRemoveFile}
              files={data.files}
            />
          )}
          <Button
            onClick={e => {
              e.preventDefault();
              open(e);
            }}
            className="btn-link btn-mb btn-sm btn-svg"
          >
            <SVG width="16px" className="svg-link svg-mr" src={Paperclip} />
            Прикрепить файл
          </Button>
          <Button disabled={isSending} type="submit">
            Отправить
          </Button>

          <input {...getInputProps()} />
          {isDragActive && <DropzoneOverlay />}
        </form>
      )}
    </Dropzone>
  );
};

export default EmailForm;
