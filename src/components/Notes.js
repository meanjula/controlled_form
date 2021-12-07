import React from "react";

const Notes = ({ firstname, lastname, phone, role, message }) => {
  return (
    <div className="notes">
      <p>
        {firstname} {lastname} - <em>{role}</em> | {phone} |{" "}
        <strong>{message}</strong>
      </p>
    </div>
  );
};

export default Notes;
