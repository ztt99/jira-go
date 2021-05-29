import { Table, TableProps } from 'antd'
import { User } from './search-panel';

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string
}
interface SearchPanelProps extends TableProps<Project> {
    users: User[];
}
export const List = ({ users }: SearchPanelProps) => {

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
            render: (v: string) => users.find((item) => item.id === v)?.name
        },
    ];
    return <Table columns={columns} />;
}