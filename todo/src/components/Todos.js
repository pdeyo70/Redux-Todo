import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted, deleteTodo } from '../actions';
import "./Todos.css"

class Todos extends React.Component {
  state = {
    todos: [],
    newTodo: ''
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleButtonClick = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    })
  };

  toggleCompleted = (e, index) => {
    e.preventDefault();
    this.props.toggleCompleted(index);
  }

  deleteTodo = (e, index) => {
    console.log(index)
    this.props.deleteTodo(index);
  }


  render() {
    return (
      <div>
        <h1>todos list</h1>
        <h2>becuse things have got to be done, this time in Redux</h2>
        <ul className="todos-list">
          {this.props.todos.map((todo, index) => (

            <li>
              <h4 onClick={e => this.toggleCompleted(e, index)}
                key={index}
                className={todo.completed ? 'complete' : 'incomplete'}>
                {todo.todo}

              </h4>
              <button onClick={e => this.deleteTodo(e, index)}>Delete</button>
            </li>

          ))}
        </ul>


        <form onSubmit={this.handleButtonClick}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add todo..." />
        </form>
        <button onClick={this.handleButtonClick} type="submit">Add Todo</button>
      </div >
    )
  }



}


const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { /* action creator function(s) go here */
    addTodo,
    toggleCompleted,
    deleteTodo
  } // same as {updateTitle: updateTitle }
)(Todos);