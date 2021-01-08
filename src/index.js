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
// import App from './03-setState/02-state-up/App.jsx';
// import App from './03-setState/03-controled.jsx';
// import App from './03-setState/04-data-render.jsx';
// import App from './04-event/01-event.jsx';
// import App from './05-form/01-form.jsx';
// import App from './05-form/02-multiple.jsx';
// import App from './05-form/03-manyInput.jsx';
// import App from './05-form/04-notControl.jsx';
// import App from './05-form/05-file.jsx';
// import App from './06-todolist/App.jsx';
// import App from './07-life-cycle/App.jsx';
// import App from './07-life-cycle/App2.jsx';
// import App from './08-context/01-context-demo/App.jsx';
// import App from './08-context/02-cart/App.jsx';
// import App2 from './09-hoc/App.jsx';
import App from './10-portal/App.jsx';


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
  <App/>,  // 实例化
  document.querySelector('#root')
)

// 卸载节点
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
// }, 3000);
