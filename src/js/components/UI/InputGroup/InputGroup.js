import React from "react";

const InputField = ({ label, inputProps }) => {
  return (
    <div className="input-group input-group-mb">
      <label className="input-group__label">{label}</label>
      <div className="input-group__inputs">
        {inputProps.map(({ error, ...rest }, key) => (
          <div key={key} className="input-group__inner-wrapper">
            <input className="input-group__inner-wrapper__input" {...rest} />
            {error && <span className="input-error">{error}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputField;
