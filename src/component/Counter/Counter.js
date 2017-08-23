import React, {Component} from 'react'
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as CounterActions from 'redux/modules/counter'

@connect(
  state => ({counter: state.counter}),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class Counter extends Component {

  constructor(props){
    super(props)
  }

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd : PropTypes.func.isRequired
  }

  render(){
    const { counter, increment, incrementIfOdd} = this.props;
    return(
      <div>
        <button onClick={increment}>
           You have clicked me {counter} time{counter === 1 ? '' : 's'}.
        </button>
        <button onClick={incrementIfOdd}> 奇数加法 </button>
      </div>
    )
  }
}