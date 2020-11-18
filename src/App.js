import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      { text: "Learn React", isComplete: false, id: 0 },
      { text: "Learn Redux", isComplete: false, id: 1 },
      { text: "Learn Css Html", isComplete: true, id: 2 },
    ],
  };

  handleComplete = (id) =>
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    });

  handleRemove = (id) =>
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });

  handleAdd = (newText) => {
    const newTodo = { text: newText, isComplete: false, id: Date.now() };
    this.setState({ todos: [...this.state.todos, newTodo] });
    this.setState({ newText: "" });
  };

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.handleAdd} />
        <TodoList
          todoList={this.state.todos}
          handleRemove={this.handleRemove}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
