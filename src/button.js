import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class MyButton extends Component {

  render(){
    return(
      <div>
        <Button onClick={this.props.clickHandler} >{this.props.text}</Button>
      </div>

    )
  }

}
