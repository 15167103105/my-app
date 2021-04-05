import React from 'react';
import { Picker, List } from 'antd-mobile';

function PickerCase() {

    const data = [
        {
            label: '不限',
            value: 0,
            children: [],
        },
        {
            label: '小于等于',
            value: -1,
            children: [
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
            ],
        },
        {
            label: '大于等于',
            value: 1,
            children: [
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
            ],
        },
    ];
    return(
        <div>
            <List>
                <Picker extra="请选择"
                    data={data}
                    title="Areas"
                    onOk={e => console.log('ok', e)}
                    onDismiss={e => console.log('dismiss', e)}
                >
                    <List.Item arrow="horizontal">选择</List.Item>
                </Picker>
            </List>
        </div>
    )
}

export default PickerCase;