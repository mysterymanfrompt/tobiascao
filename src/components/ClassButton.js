import "./ClassButton.css";
import { useState } from "react";
import ClassModal from "./ClassModal";

const ClassButton = ({ imageLocation, title, text, toggleModal }) => {
  return (
    <>
      <div
        className="class-button"
        onClick={() => toggleModal(title, text, imageLocation)}
      >
        <img className="button-image" src={imageLocation} alt="" />
        <span className="button-text">{title}</span>
      </div>
    </>
  );
};

export default ClassButton;
