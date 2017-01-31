import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button'

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
    console.log(this.state.counter);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
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
          <form>
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo}/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name} </li>)
              }
              {/* <li><input type="checkbox"/> Go to the store</li>
              <li><input type="checkbox"/> Read React api</li>
              <li><input type="checkbox"/> Build React app</li> */}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
