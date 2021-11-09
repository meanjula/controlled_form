import React from 'react';

const View = (props) => {
	return (
		<div className="view">
			<h3>Show the input</h3>
			<div className="box">
				<div className="empty-div">
					<p className="line"></p>
					<p className="line"></p>
					<p className="line"></p>
					<p className="line"></p>
					<p className="line"></p>
				</div>
				<div className="show-input">
				<p>First name <span>{props.firstname}</span></p>	
			    <p>Last name <span>{props.lastname}</span></p>	
			    <p>Phone number <span>{props.phone}</span></p>	
		        <p className="message-span">Message <span >{props.message}</span></p>	
				<p>Role <span>{props.role}</span></p>
				</div>
	
			</div>
		
		</div>
	);
};

export default View;