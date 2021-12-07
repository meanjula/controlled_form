import "./App.css";
import React, { Component } from "react";
import View from "./components/View";
import Form from "./components/Form";
import Popup from "./components/Popup";
import Notes from "./components/Notes";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    popup: false,
    data: [],
  };

  //res gives all json data and res.data gives specific data
  componentDidMount() {
    axios
      .get("http://localhost:3001/notes")
      .then((res) => this.setState({ data: res.data }));
  }
  formHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({ popup: true });
  };

  postHandler = (e) => {
    axios
      .post("http://localhost:3001/notes", this.state.inputData)
      .then((response) => {
        console.log(response);
        this.setState({ popup: false });
        //for closing
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="form-area">
          <Form formHandler={this.formHandler} submit={this.popupHandler} />
          <View {...this.state.inputData} />
        </div>

        {/* if popup state is true return Popup component otherwise do not show*/}
        {this.state.popup && (
          <Popup {...this.state.inputData} postHandler={this.postHandler} />
        )}
        <div className="notes-wrapper">
          <h2>User Input data received from server </h2>
          {this.state.data.map((item) => (
            <Notes {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
