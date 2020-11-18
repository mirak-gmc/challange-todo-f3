import React, { Fragment, Component } from "react";

class AddTodo extends Component {
  // addTodo , text , handleChange === props

  state = {
    text: "",
  };

  render() {
    return (
      <Fragment>
        <h1>Todo App</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.addTodo(this.state.text);
          }}
        >
          <input
            value={this.state.text}
            type="text"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button>Add</button>
        </form>
      </Fragment>
    );
  }
}

export default AddTodo;
