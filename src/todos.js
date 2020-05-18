import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id} className='collection-item'>
          <span>{todo.content}</span>
          <i
            onClick={() => deleteTodo(todo.id)}
            class='fas fa-trash-alt fa-2x'
          ></i>
        </div>
      );
    })
  ) : (
    <h4 className='center-align white'>You have no todo's left</h4>
  );
  return <div className='todos collection'>{todoList}</div>;
};

export default Todos;
