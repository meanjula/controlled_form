import React from "react";
//onSubmit check all form input before sending and collect data
const Form = ({ submit, formHandler }) => {
  return (
    <form onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="firstname">First name</label>
        {/*controlled component react controls the form so don't have value inside input */}
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={formHandler}
        ></input>
      </div>
      <div className="form-field">
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={formHandler}
        ></input>
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone number</label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={formHandler}
        ></input>
      </div>{" "}
      <div className="form-field">
        <label htmlFor="message">Message me</label>
        <textarea
          name="message"
          id="message"
          onChange={formHandler}
          rows="3"
          cols="10"
        ></textarea>
      </div>
      <div className="form-field">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" onChange={formHandler}>
          <option value="disabled">Choose</option>
          <option value="developer">Developer</option>
          <option value="ceo">CEO</option>
          <option value="designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div className="form-field">
        <input type="submit" value="send"></input>
      </div>
    </form>
  );
};

export default Form;
