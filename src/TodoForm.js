import React from 'react';

class TodoForm extends React.Component {
  state = {
    content: '',
  };
  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: '',
    });
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <div className='input-field'>
            <input
              onChange={this.handleChange}
              type='text'
              className='validate'
              id='todo'
              value={this.state.content}
            ></input>
            <label htmlFor='todo'>Add Todo</label>
          </div>
          <button className='btn waves-effect waves-light black' type='submit'>
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
