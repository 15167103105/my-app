import { useState, useEffect } from 'react';
import {ChatAPI} from "../config/CHATAPI";

/**
 * React中两种流行的共享组件之间状态逻辑的方式：render props和高阶组件
 * 自定义Hook是一个函数，其名称以use开头，函数内部可以调用其他Hook
 * */
function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ChatAPI.subscribeTofriendstatus(friendID, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };

    });

    return isOnline;
}

/**
 * 使用自定义Hook
 * */
function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}