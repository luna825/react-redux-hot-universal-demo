import React,{Component} from 'react'
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, About} from '../index'

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}