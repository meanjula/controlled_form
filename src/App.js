
import './App.css';
import React, { Component } from 'react';
import View from './components/View';
import Form from './components/Form';
import Popup from './components/Popup';

class App extends Component {
  state={
    firstname:"",
    lastname:"",
    phone:"",
    role:"",
    message:"",
    popup:false,
  };
  formHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  };
  popupHandler=(e)=>{
    e.preventDefault();
    this.setState({popup:true});
  };

  render() {
    const props={
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      phone:this.state.phone,
      role:this.state.role,
      message:this.state.message,
    }
    return (
      <div className="App">
        <Form formHandler={this.formHandler} submit={this.popupHandler}/> 
        <View {...props}/>     
        {/* if popup state is true return Popup component otherwise do not show*/}
        {this.state.popup &&<Popup {...props}/>}    
      </div>
    );
  }
}

export default App;
