import React, {Component} from 'react'
import {Counter} from 'component'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Home</h1>
        <Counter />
      </div>
    )
  }
}