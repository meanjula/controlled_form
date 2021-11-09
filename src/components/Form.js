import React from 'react';

const Form = (props) => {
	console.log(props)
	return (
		<form>
			<div className="form-field">
			  <label htmlFor="firstname">First name</label>
			  <input type="text" name="firstname" id="firstname" required onChange={props.formHandler}></input>
			</div>
			<div className="form-field">
			  <label htmlFor="lastname">Last name</label>
			  <input type="text" name="lastname" id="lastname"  onChange={props.formHandler}></input>
			</div>
			<div className="form-field">
			  <label htmlFor="phone">Phone number</label>
			  <input type="number" name="phone" id="phone"  onChange={props.formHandler}></input>
			</div>			<div className="form-field"> 
			  <label htmlFor="message">Message me</label>
			  <textarea  name="message" id="message"  onChange={props.formHandler} rows="3" cols="10"></textarea>
			</div>

			<div className="form-field">
			  <label htmlFor="role">Role</label>
			  <select name="role" id="role" onChange={props.formHandler}>
			   <option value="developer">Developer</option>
               <option value="ceo">CEO</option>
               <option value="designer">Designer</option>
               <option value="Manager">Manager</option>
			</select>
			</div>

		</form>
	);
};

export default Form;