import React from "react";

const TodoCard = (props) => {
  // props == { todo  , handleComplete , removeTodo}
  return (
    <div className="todo-card">
      <p className={props.todo.isComplete ? "text-comleted" : ""}>
        {props.todo.text}
      </p>
      <div>
        <button onClick={() => props.removeTodo(props.todo.id)}>Delete</button>
        <button onClick={() => props.completeTodo(props.todo.id)}>
          {props.todo.isComplete ? "Undo" : "Complete"}{" "}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
