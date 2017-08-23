import React,{Component} from 'react'
import {Link, BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import {Home, About} from '../index'

import style from './App.scss';

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Router>
        <div className={style.app}>

          <Navbar fixedTop>

            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to='/' activeStyle={{color: '#33e0ff'}} exact>
                <div className={style.brand}></div>
                <span>React Redux Demo</span></NavLink>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
             <Navbar.Collapse>
              <Nav>
                <LinkContainer to='/about'><NavItem eventKey={1} >About</NavItem></LinkContainer>
              </Nav>
             </Navbar.Collapse>
          </Navbar>
          <div className={style.appContent}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}