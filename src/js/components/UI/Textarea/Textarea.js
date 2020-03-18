import React from "react";

const Textarea = ({ label, error, ...rest }) => (
  <div className="textarea textarea-mb">
    <label className="textarea__label">{label}</label>
    <textarea className="textarea__textarea" {...rest} />
    {error && <span className='input-error'>{error}</span>}
  </div>
);

export default Textarea;
