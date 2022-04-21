import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
    
  const renderTodos = () => {
    let filteredTodos = [];
    if(props.filter === 'all'){
        filteredTodos = props.todosYO
    } else if( props.filter === 'complete'){
        filteredTodos = props.todosYO.filter(todo=> todo.complete)
    } else {
        filteredTodos = props.todosYO.filter(todo=> !todo.complete)
    }

    return filteredTodos.map((todo) => {
      return (
        <li
          onClick={() => props.dispatch({ type: "TOGGLE_TODO", id: todo.id })}
          style={todo.complete ? { textDecoration: "line-through" } : {}}
          key={todo.id}
        >
          {todo.name}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>todo list</h1>
      <p>in todolist filter is {props.filter}</p>
      <ul>{renderTodos()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todosYO: state.todos, filter: state.filter };
};
export default connect(mapStateToProps)(TodoList);



