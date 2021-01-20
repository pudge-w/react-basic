import React, {useCallback, useState, useMemo, memo} from 'react';

const Child1 = (props) => {
  console.log(props)
  return <div>child1</div>
}

const Child = memo(({a, b, onAdd}) => {
  console.log('child render.')

  const Child2 = useMemo(() => () => <Child1 a={a}></Child1>, [a]);
  const Child3 = useMemo(() => () => {
    console.log(123333)
    return <Child1 a={b}></Child1>
  }, [b]);


  return (
    <>
      <h2>child</h2>
      <Child2></Child2>
      <Child3></Child3>
      <button onClick={ onAdd }>add</button>
    </>
  )
})

const UseCallBack = () => {
  // useCallback用于做记忆函数，缓存函数
  console.log('parent render.')
  const [count, setCount] = useState(0);
  const [a, setA] = useState(3);
  const [b] = useState(5);

  const handleAdd = useCallback(() => {
    console.log(123)
  }, [])

  // const handleAdd = () => {
  //   console.log(123)
  // }

  const handleClick = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
      <p onClick={() => setA(7)}>{ count }</p>
      <button onClick={ handleClick }>parent button</button>
      <Child onAdd={ handleAdd } a={a} b={b}/>
    </div>
  );
}

export default UseCallBack;