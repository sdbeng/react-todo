import React from 'react'
import {FormGroup, FormControl} from 'react-bootstrap'

// plain stateless func component
export const TodoForm = (props) => (
  // bring over the form markup from App.js to here
  <form onSubmit={props.handleSubmit}>
    <FormGroup>
      {/* <ControlLabel>Working example with validation</ControlLabel> */}
      <FormControl
        type="text"
        value={props.currentTodo}
        placeholder="Enter text"
        onChange={props.handleInputChange}
      />
      {/* <input type="text"
        onChange={props.handleInputChange}
        value={props.currentTodo}/> */}
    </FormGroup>

  </form>
)
// validation
TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
