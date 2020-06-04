import React, { useState } from 'react';

// useState就是一个Hook,在函数组件里调用它来给组件添加一些内部state，React会在重复渲染时保留这个state。
// useState会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
// 它类似class组件的this.setState，但是它不会把新的state和旧的state进行合并。
export default function Example() {
    const [count, setCount] = useState(0);
    console.log('useState', useState(0));
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