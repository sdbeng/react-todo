import React, { Component } from 'react';
import './App.css';
import MyButton from './button'
import {loadTodos, createTodo} from './lib/todoService'
import {
  Navbar, Grid, NavItem, NavDropdown, MenuItem, Nav, PageHeader,ButtonGroup
} from 'react-bootstrap'


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
      todos: [],
      currentTodo: ''
    }
    this.click = this.click.bind(this)
    this.click10 = this.click10.bind(this)
    this.click100 = this.click100.bind(this)
    this.decrement = this.decrement.bind(this)
    // for handleInputChange bind
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  }

  componentDidMount(){
    loadTodos()
    .then(todos => this.setState({todos}))
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
    //add createTodo method to save data to server
    createTodo(newTodo)
      // .then(() => console.log('Todo added'))
      // .then(() => this.setState({message: 'Todo added'}))
      //call the showTempMessage
      .then(() => this.showTempMessage('Todo added'))
  }

  //make temporary message
  showTempMessage(msg){
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
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
  decrement(){
    this.setState({
      counter: this.state.counter - 1
    }, () => console.log("decremented 1"))
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
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">My React</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">CV</NavItem>
                <NavItem eventKey={2} href="#">Projects</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Node Backend1</MenuItem>
                  <MenuItem eventKey={3.2}>Firebase Backend</MenuItem>
                  <MenuItem eventKey={3.3}>Node Backend-MongoDB</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>React server</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">About</NavItem>
              </Nav>
            </Navbar.Collapse>

        </Navbar>
        <Grid>
          <PageHeader>Counters</PageHeader>
          <h3>{this.state.counter}</h3>

          <ButtonGroup>

              <MyButton clickHandler={this.click} text="+1"/>
              <MyButton clickHandler={this.click10} text="+10"/>
              <MyButton clickHandler={this.click100} text="+100"/>

          </ButtonGroup>
          <ButtonGroup>
            <MyButton clickHandler={this.decrement} text="-1"/>
          </ButtonGroup>

        </Grid>


        {/* todolist */}
        <Grid>
          <div className="Todo-App">
            <PageHeader>My Todo List <small>v.3.7</small></PageHeader>

            {/* display an error message when trying to submit empty todo item*/}
            {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
            {this.state.message && <span className='success'>{this.state.message}</span>}

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
        </Grid>


      </div>
    );
  }
}

export default App;
