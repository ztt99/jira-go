import { Table } from 'antd'

export const List = ({ list, users }) => {

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: '负责人',
            dataIndex: 'personId',
            key: 'personId',
            render: (v) => users.find(item => item.id === v)?.name
        },
    ];
    return <Table dataSource={list} columns={columns} />;
}