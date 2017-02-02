import React from 'react'
import {Checkbox} from 'react-bootstrap'

export const TodoItem = (props) => {
  return (
    <li>
      <Checkbox defaultChecked={props.isComplete}>
        {props.name}
      </Checkbox>

      {/* <input type="checkbox"
        defaultChecked={props.isComplete}/>{props.name} */}
    </li>
  )
}
//validation: this recibes a complete object
TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
