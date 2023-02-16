import React from 'react';
import "./Modal.scss";
import Context from "./Context.jsx";

const Modal = ({className, show, onHide, children}) => {

  if (!show) return null;

  return (
    <Context.Provider
      value={{onHide}}
    >
      <div
        className={show ? 'modal active': 'modal'}
        onClick={() => onHide()}
      >
        <div
          className={show ? `modal-content active ${className}`: 'modal-content'}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Context.Provider>
  );
};

export default Modal;