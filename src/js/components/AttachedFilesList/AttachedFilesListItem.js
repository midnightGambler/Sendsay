import React from "react";
import SVG from "react-inlinesvg";
import Paperclip from "../../../svg/paperclip.svg";
import Trash from "../../../svg/trash.svg";
import Button from "../UI/Button/Button";

const AttachedFilesListItem = ({ name, handleRemoveFile }) => {
  const formatName = name => {
    return name.length > 15
      ? name.slice(0, 15) +
          ".." +
          name.slice(Math.max(0, name.lastIndexOf(".")) || Infinity)
      : name;
  };

  return (
    <li className="attached-files-list__item">
      <span className="attached-files-list__item__name">
        <SVG width="30px" className="svg-mr" src={Paperclip} />
        <span className="attached-files-list__item__name__inner">
          {/* {name.length > 15 ? formatName(name) : name} */}
          {formatName(name)}
        </span>
      </span>
      <Button
        onClick={handleRemoveFile.bind(null, name)}
        className="btn-error btn-svg"
      >
        <SVG className="svg-error svg-mr" width="13px" src={Trash} />
        Удалить
      </Button>
    </li>
  );
};

export default AttachedFilesListItem;
