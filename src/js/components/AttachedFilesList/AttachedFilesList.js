import React from "react";
import AttachedFilesListItem from "./AttachedFilesListItem";

const AttachedFilesList = ({ files, handleRemoveFile }) => {
  return (
    <ul className="attached-files-list">
      {files.map(({ name }) => (
        <AttachedFilesListItem
          handleRemoveFile={handleRemoveFile}
          name={name}
          key={name}
        />
      ))}
    </ul>
  );
};

export default AttachedFilesList;
