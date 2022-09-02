import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <ul className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "done👌:" : "to do👋:"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </ul>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
