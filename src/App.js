import React from 'react';
import Todos from './todos';
import TodoForm from './TodoForm';
import './App.css';

class App extends React.Component {
  state = {
    todos: [],
  };
  deleteTodo = (id) => {
    const updateTodoList = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: updateTodoList,
    });
  };
  addTodo = (todo) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      content: todo,
    };
    const todoList = [...this.state.todos, newTodo];
    this.setState({
      todos: todoList,
    });
  };
  render() {
    return (
      <div className='todos-app container'>
        <h1 className='center-align white-text'>Todos</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}></Todos>
        <TodoForm addTodo={this.addTodo}></TodoForm>
      </div>
    );
  }
}

export default App;
