// Brower app  ->  ReactDom
// Native app  ->  ReactNative
import React from 'react';
import ReactDOM from 'react-dom';

// import App from './01-getting-start/01-nest.jsx';
// import App from './01-getting-start/02-class-style.jsx';
// import App from './01-getting-start/03-styled-component.jsx';
// import App from './02-state-props/01-data-mount.jsx';
// import App from './02-state-props/04-state.jsx';
// import App from './03-setState/01-setstate.jsx';
import App from './03-setState/02-state-up/App.jsx';


// const app = <div>hello react!</div>;
//! 函数组件
// const App = (props) => {
//   return <div>hello react { props.name }</div>;
// }


//! 类组件
// 语法糖，在浏览器运行的时候，会转成es5的function
// class App extends React.Component {
//   // 类组件必须要有render方法, 同时又是一个生命周期钩子函数
//   render () {
//     // console.log(this);
//     return (
//       <div>hello react { this.props.name }</div>
//     );
//   }
// }

// ReactDOM里有一个render方法，功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上
// 里面有两个参数，第一个参数就是元素，第二个参数表示挂载的地方

//! 组件  首字母大写的是组件
//! 元素  首字母小写的是元素
ReactDOM.render(
  // app({
  //   name: '!!!'
  // }), // jsx语法
  <App />,  // 实例化
  document.querySelector('#root')
)
