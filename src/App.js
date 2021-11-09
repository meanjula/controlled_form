
import './App.css';
import React, { Component } from 'react';
import View from './components/View';
import Form from './components/Form';

class App extends Component {
  state={
    firstname:"",
    lastname:"",
    phone:"",
    role:"",
    message:"",
  };
  formHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  };
  render() {
    return (
      <div className="App">
        <Form formHandler={this.formHandler}/>
        <View 
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phone={this.state.phone}
        role={this.state.role}
        message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
