import React from 'react'
// plain stateless func component
export const TodoForm = (props) => (
  // bring over the form markup from App.js to here
  <form>
    <input type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>
)
// validation
TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired
}
