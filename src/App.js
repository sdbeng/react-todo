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
//**My ONLY question ** is how this index.js filename can interfere when preparing for routing and production

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
  }
  handleInputChange(evt){
    this.setState({
      currentTodo: evt.target.value
    })
  }

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
          {/* insert TodoForm tag: create attributes to pass to child component */}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />

            {/* refactoring: grab this TodoList iteration and put it in its own component */}
            {/* create an attribute named todos to pass to it children component */}
            <TodoList todos={this.state.todos}/>

        </div>

      </div>
    );
  }
}

export default App;