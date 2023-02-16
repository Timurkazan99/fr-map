import React from 'react';
import "./FloatingLabel.scss";

const FloatingLabel = ({className, labelClass, label, children}) => {
  return (
    <div className={`float-box ${className}`}>
      {children}
      <span
        className={labelClass}
      >
        {label}
      </span>
    </div>
  );
};

export default FloatingLabel;