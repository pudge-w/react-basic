import React from 'react';

// import { Map, List, Seq } from 'immutable';

const App = () => {
  // 定义对象使用Map
  // const map1 = Map({
  //   a: 1,
  //   b: 2
  // });
  // // console.log(map1.toJS());
  // 改变对象(生成新对象)  set()
  // const map2 = map1.set('a', 10);
  // // console.log(map2.toJS());
  // 获取对象里面的元素   get()
  // // console.log(map2.get('a'));
  // console.log(map1 === map2);



  // const obj = {
  //   a: 1,
  //   b: 2
  // }
  // const map1 = Map(obj);
  // const map2 = Map(obj);
  // console.log(map1 === map2); // false
  // equals是用来比较里面的内容是否一一相等
  // console.log(map1.equals(map2)); // true




  // 定义数组
  // const list1 = List([1, 2, 3, 4]);
  // // push的时候，push普通数组
  // // const list2 = list1.push(5);
  // // concat用于合并数组，可以合并immutable数组，也可以合并普通数组
  // const list3 = list1.concat(List([5, 6]));
  // const list4 = list3.concat([7, 8, 9]);
  // const list5 = list4.unshift(0)
  // console.log(list5.toJS());




  // Map对象的遍历使用map方法
  // const obj1 = Map({
  //   a: 1,
  //   b: 2,
  //   c: 3
  // })
  // const obj2 = obj1.map((v, k) => {
  //   // console.log(v, k)
  //   return k.toUpperCase()
  // }).join()
  // console.log(obj2);




  // 对象合并, meger方法，mergeDeep方法用于深层合并
  // 可以和普通对象进行合并
  // const map1 = Map({a: 1, b: 2, x: { y: 5, z: 6 }});
  // const map2 = Map({b: 3, c: 4, x: { w: 7, y: 8 }});
  // const obj = { g: 10 }
  // console.log(map1.merge(map2).toJS());
  // console.log(map1.mergeDeep(map2, obj).toJS());



  // 数组合并
  // 也可以和普通数组合并
  // const list1 = List([1, 2, 3]);
  // const list2 = List([4, 5, [6, 7]]);
  // const list3 = [8, 9]
  // console.log(list1.concat(list2, list3).toJS());




  // Seq也可以生成对象, 也可以生成数组
  // Seq是惰性的
  // const map1 = Seq({
  //   a: 1,
  //   b: 2
  // })
  // const seq = map1.map(v => {
  //   console.log(v)
  //   return v * v
  // });
  // console.log(seq.toJS());
  // const list = Seq([1, 2, 3])
  // console.log(list)


  return (
    <div>immutable</div>
  );
}

export default App;