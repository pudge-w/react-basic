import React, { Component } from 'react';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    push(value) {
      dispatch({type: 'push', task: value})
    }
  }
}

class Input extends Component {
  state = {
    textValue: ''
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    })
  }

  handleKeyUp = e => {
    if (e.keyCode === 13 && this.state.textValue) {
      this.props.push(this.state.textValue)
    }
  }

  render() {
    return (
      <input 
        type="text"
        value={this.state.textValue}
        onChange={ this.handleChange }
        onKeyUp={ this.handleKeyUp }
      />
    );
  }

  // componentDidMount() {
  //   console.log(this)
  // }
}

export default connect(null, mapDispatchToProps)(Input);