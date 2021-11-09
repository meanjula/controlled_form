import React from 'react';
const closeHandler = () => {
	window.location.reload();
  };
  
const Popup = (props) => {
	return(
		<div className="overlay">
			<div className="inner-popup">
			  <h3>Your note:</h3>
			  <p>First name <span>{props.firstname}</span></p>	
			  <p>Last name <span>{props.lastname}</span></p>	
			  <p>Phone number <span>{props.phone}</span></p>	
		      <p className="message-span">Message <span >{props.message}</  span></p>	
			  <p>Role <span>{props.role}</span></p>
			  <button className="yesButton" onClick={closeHandler}>Yes I am sure</button>
			  <button className="noButton" onClick={closeHandler}>Nope do not want to post</button>
			  {props.children}	
           </div>
	
		</div>
	);
};

export default Popup;