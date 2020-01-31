import React from "react";

const Card = ({ title, subtitle, className = '', children }) => (
  <div className={`card ${className}`}>
    {title && <h1 className="card__title">{title}</h1>}
    {subtitle && <p className="card__subtitle">{subtitle}</p>}
    {children}
  </div>
);

export default Card;
