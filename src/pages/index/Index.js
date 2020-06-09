import React, { useState, useEffect } from 'react';

// useState就是一个Hook,在函数组件里调用它来给组件添加一些内部state，React会在重复渲染时保留这个state。
// useState会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
// 它类似class组件的this.setState，但是它不会把新的state和旧的state进行合并。
export default function Example() {
    const [count, setCount] = useState(0);
    // 声明多个变量
    const [fruit, setFruit] = useState('banana');
    console.log('useState', useState('banana'), fruit, setFruit);

    // useEffect 是一个Effect Hook，给函数组件增加了操作副作用的能力，它跟class组件中的componentDidMount、componentDidUpdate、
    // componentWillUnmount具有相同的用途，只不过被合成了一个API
    useEffect(() => {
        document.title = `你点击了${count}次`;
    });
    return(
        <div>
            <p>你点击了{count}次</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
                style={{ marginRight: '10px' }}
            >点击</button>
            <button
                onClick={() => {
                    setCount(0)
                }}
            >清空</button>
        </div>
    )
}