import React from "react";

const DropzoneOverlay = () => (
  <div className="dropzone-overlay">
    <h3 className="dropzone-overlay__title">Бросайте файлы сюда, я ловлю</h3>
    <p className="dropzone-overlay__subtitle">
      Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и
      zip-архивы.
      <br />
      Размеры файла до 5 МБ
    </p>
  </div>
);

export default DropzoneOverlay;
