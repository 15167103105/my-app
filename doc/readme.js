import React, { useState, useEffect } from 'react';

/**
 * 1.只在最顶层使用Hook
 * 不要在循环，条件或嵌套函数中调用Hook，确保总是在你的React函数的最顶层调用他们。
 * 就能确保Hook在每一次渲染中都按照同样的顺序被调用。
 * 这让React能够在多次的useState和useEffect调用之间保持hook状态的正确
 *
 * 2.只在react函数中调用Hook
 * 不要在普通的JavaScript函数中调用Hook
 * */

function Form() {
    /**
     * 多个state时，根据Hook调用顺序匹配，将内部state和对应的Hook进行关联
     * */
    const [name, setName] = useState('Mary');
    useEffect(function persistForm() {
        localStorage.setItem('formData', name);
    });

    const [surname, setSurName] = useState('Poppins');
    useEffect(function updateTitle() {
        document.title = name + '' + surname;
    });

    /**
     * 违反第一条规则，不可在条件语句中使用Hook
     * 可能存在表达式为false情况，渲染会跳过改Hook，导致Hook的调用顺醋发生了改变
     * */
    if (name !== '') {
        useEffect(function persistForm() {
            localStorage.setItem('formData', name);
        });
    }
}