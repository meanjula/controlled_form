import React from "react";

const View = ({ firstname, lastname, phone, message, role }) => {
  return (
    <div className="view">
      {/* <h3>Show the input</h3> */}
      <div className="box">
        <div className="empty-div">
          <p className="line"></p>
          <p className="line"></p>
          <p className="line"></p>
          <p className="line"></p>
          <p className="line"></p>
        </div>
        <div className="show-input">
          <p>
            Firstname <span>{firstname}</span>
          </p>
          <p>
            Lastname <span>{lastname}</span>
          </p>
          <p>
            Phone <span>{phone}</span>
          </p>
          <p className="message-span">
            Message <span>{message}</span>
          </p>
          <p>
            Role <span>{role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
