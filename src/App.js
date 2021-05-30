import "./App.css";
import React from "react";

import Header from "./MyComponents/Header";
import SearchBox from "./MyComponents/SearchBox";
import Result from "./MyComponents/Result";
const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: "Name It",
      headerExpanded: true,
      suggestedNames:[]
    };
  }
  handleInputChange = (inputText) => {
    
    this.setState({ headerExpanded: !inputText ,suggestedNames:inputText?name(inputText):[] });
  };
  render() {
    return (
      <>
        <Header
          headerExpanded={this.state.headerExpanded}
          headtitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <Result suggestedNames={this.state.suggestedNames} />
      </>
    );
  }
}

export default App;
