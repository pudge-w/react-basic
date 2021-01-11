import React, { Component } from 'react';

import { connect } from 'react-redux';
// connect是一个方法，执行connect()，结果是一个高阶组件
// connect有两个参数,是两个函数

// 映射store的state到组件的props
// 里面可以直接使用参数state，表示store的state
const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

// 映射store的dispatch到组件的props
// const mapDispatchToProps = (dispatch) => {

// }

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (<li key={ index }>{ item }</li>)
            })
          }
        </ul>
      </div>
    );
  }

  componentDidMount() {
    console.log(this)
  }
}

export default connect(mapStateToProps)(List);