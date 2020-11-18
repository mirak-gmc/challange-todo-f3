import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  //props = { todoList , handleRemove , handleComplete }
  return (
    <div className="todo-list">
      {props.todoList.map((el) => (
        // el = { text , id , isComplete }
        <TodoCard
          key={el.id}
          todo={el}
          removeTodo={props.handleRemove}
          completeTodo={props.handleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
