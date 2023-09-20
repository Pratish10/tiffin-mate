import React from "react";

const Modal = ({ isOpen, onClose, message, heading }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1>{heading}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
