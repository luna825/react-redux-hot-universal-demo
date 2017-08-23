import React, {Component} from 'react'
import {Counter} from 'component'

import style from './Home.scss'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const logoImage = require('./logo.png');
    return(
      <div className={style.home}>
        <div className={style.masthead}>
          <div className="container">
            <div className={style.logo}>
              <p><img src={logoImage}/></p>
            </div>
          </div>
          <h1>React Redux Example</h1>
          <h2>All the modern best practices in one example.</h2>
        </div>

        <div className="contaner">
          <div className={style.counterContainer}>
            <Counter />
          </div>
        </div>
        
      </div>
    )
  }
}