import React, { useState, useEffect } from 'react';
import { ChatAPI } from '../config/CHATAPI';

function FrinendStatus(props) {
    const [ isOnline, setIsOnline ] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribrToFriendStatus(props.friend.id, handleStatusChange);
        // effect可选的清除机制，每个effect都可以返回一个清除函数，可以将添加和移除订阅的逻辑放在一起
        // 组件卸载的时候执行清除操作，effect在每次渲染的时候都会执行
        return function clearup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        }
        // 或者直接返回一个箭头函数
        return () => {}
    });
    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}