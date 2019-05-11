import React from "react";
import { connect } from "react-redux";
import { addTodo, toogleCompleted } from '../actions';

class Todos extends React.Component {
  state = {
    todos: [],
    newTodo: ''
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleTodoClick = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  };

  toggleCompleted = (e, index) => {
    e.preventDefault();
    this.props.toggleCompleted(index);
  }

  render(){
    return(
      <>
        <h1>todos list</h1>
        <h2>becuse things have got to be done, this time in Redux</h2>
        <div className="todos-list">
          {this.props.todos.map((todo, index) => (
            //this is where I bookmarked
          ))}
        </div>
      </>
    )
  }



}


const mapStateToProps = state => {
  console.log(state);
  return {

  };
};

export default connect(
  mapStateToProps,
  { /* action creator function(s) go here */
    addTodo,
    toogleCompleted
  } // same as { updateTitle: updateTitle }
)(Todos);