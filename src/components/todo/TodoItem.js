import React from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox"
        defaultChecked={props.isComplete}/>{props.name}
    </li>
  )
}
//validation: this recibes a complete object
TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
