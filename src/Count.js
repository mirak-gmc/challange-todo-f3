import React from "react";
import "./App.css";

class Count extends React.Component {
  // state declaration
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("Component is rendring .............");
  }

  componentDidUpdate() {
    if (this.state.count > 10) {
      alert("You won");
      this.setState({ count: 0 });
    }
    console.log(
      "The compnent is updated for the " + this.state.count + " time"
    );
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleClick()}>increment </button>
      </div>
    );
  }
}

export default Count;
