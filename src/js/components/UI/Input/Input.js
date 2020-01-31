import React from "react";

const Input = ({ label, className = '', error, ...rest }) => (
  <div className={`input ${className}`}>
    <label className="input__label">{label}</label>
    <input className="input__input" {...rest} />
    {error && <span className="input-error">{error}</span>}
  </div>
);

export default Input;
