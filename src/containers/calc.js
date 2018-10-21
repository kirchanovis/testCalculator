import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Display from '../components/display'
import Button from '../components/button'
import {clearDisplay, calculateDisplay, addDisplay} from '../actions'

class Calc extends Component {
  render() {
    return (
      <div className="calc">
        <Display data={this.props.display} />
        <div className="buttons"> 
          <Button onClick={() => this.props.clear() } label="C"  />
          <Button onClick={() => this.props.add('7') } label="7" />
          <Button onClick={() => this.props.add('4')} label="4" />
          <Button onClick={() => this.props.add('1')} label="1" />
          <Button onClick={() => this.props.add('0')} label="0" />

          <Button onClick={() => this.props.add('/')} label="/" />
          <Button onClick={() => this.props.add('8')} label="8" />
          <Button onClick={() => this.props.add('5')} label="5" />
          <Button onClick={() => this.props.add('2')} label="2" />
          <Button onClick={() => this.props.add('.')} label="." />

          <Button onClick={() => this.props.add('*')} label="*" />
          <Button onClick={() => this.props.add('9')} label="9" />
          <Button onClick={() => this.props.add('6')} label="6" />
          <Button onClick={() => this.props.add('3')} label="3" />
          <Button label="" value="null" />

          <Button onClick={() => this.props.add('-')} label="-" />
          <Button onClick={() => this.props.add('+')} label="+" size="2" />
          <Button onClick={() => this.props.calculate()} label="=" size="2" />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    display: state.calc.display
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({clear: clearDisplay,add: addDisplay, calculate: calculateDisplay},dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Calc);
