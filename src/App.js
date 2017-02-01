import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button'
//See Note
// import {TodoForm} from './components/todo/TodoForm'

// *Note- there is an alternative way to import components in since they will be coming from the
//same unique todo folder.What i do is create a file called index.js and
//add the 2 imports there, then modify the above line to fix the path:
import {TodoForm, TodoList} from './components/todo'

//OR just do it the traditional way of importing the component from where it's coming from
// import {TodoList} from './components/todo/TodoList'
//**My ONLY question ** is how this index.js filename can interfere when preparing
//for routing and production

import {addTodo, generateId} from './lib/todoHelpers'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      todos: [
        {id: 1, name: 'Go to the store', isComplete: true},
        {id: 2, name: 'Read React api', isComplete: false},
        {id: 3, name: 'Build React app', isComplete: false}
      ],
      currentTodo: ''
    }
    this.click = this.click.bind(this)
    this.click10 = this.click10.bind(this)
    this.click100 = this.click100.bind(this)
    // for handleInputChange bind
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  }
  handleSubmit(evt){
    evt.preventDefault()

    const newId = generateId()

    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    }
    //add it to the list of existing todos
    const updatedTodos = addTodo(this.state.todos, newTodo)
    //then update our application state with setState
    this.setState({
      todos: updatedTodos,
      // clear the form
      currentTodo: '',
      //update the errorMessage to an empty string when there is a valid entry
      errorMessage: ''
    })
  }
  //this func is to precent empty form submissions
  handleEmptySubmit(evt){
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name item in the list.'
    })
  }

  handleInputChange(evt){
    this.setState({
      currentTodo: evt.target.value
    })
  }

//refactor later to when i have multiple states to handle
// componentDidMount(){
//   click().then(response => {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   })
// }

  click(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  click10(){
    this.setState({
      counter: this.state.counter + 10
    })
  }
  click100(){
    this.setState({
      counter: this.state.counter + 100
    })
  }
  render() {
    // console.log(this.state.counter);
    //define a const called submitHandler to handle the form submission validations
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <p className="App-intro">
          Count: {this.state.counter}
        </p>
        <Button clickHandler={this.click} text="add 1"/>
        <Button clickHandler={this.click10} text="add 10"/>
        <Button clickHandler={this.click100} text="add 100"/>

        {/* todolist */}
        <div className="Todo-App">
          <h2>Todo List</h2>
          {/* display an error message when trying to submit empty todo item*/}
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}

          {/* insert TodoForm tag: create attributes to pass to child component */}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            // now, with handle validations
            handleSubmit={submitHandler}
            //previously without form validations
            // handleSubmit={this.handleSubmit}
          />

            {/* refactoring: grab this TodoList iteration and put it in its own component */}
            {/* create an attribute named todos to pass to it children component */}
            <TodoList todos={this.state.todos}/>

        </div>

      </div>
    );
  }
}

export default App;
