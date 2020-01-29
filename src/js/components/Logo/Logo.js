import React from "react";

const Logo = () => {
  return (
    <div className="logo logo-mb">
      <div className="logo__ellipse logo__ellipse-mr" />
      <div className="logo__rectangle logo__rectangle-mr" />
      <div className="logo__ellipse" />
      <div className="logo__rectangle-flip">
        <div className='logo__rectangle-flip--inner' />
      </div>
    </div>
  );
};

export default Logo;
