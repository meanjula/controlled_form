import React from "react";
const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ firstname, lastname, phone, message, role, postHandler }) => {
  return (
    <div className="overlay">
      <div className="inner-popup">
        <h3>Your note:</h3>
        <p>
          First name <span>{firstname}</span>
        </p>
        <p>
          Last name <span>{lastname}</span>
        </p>
        <p>
          Phone number <span>{phone}</span>
        </p>
        <p className="message-span">
          Message <span>{message}</span>
        </p>
        <p>
          Role <span>{role}</span>
        </p>
        <button className="yesButton" onClick={postHandler}>
          Yes I am sure
        </button>
        <button className="noButton" onClick={closeHandler}>
          Nope do not want to post
        </button>
      </div>
    </div>
  );
};

export default Popup;
