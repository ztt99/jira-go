import { Table, TableProps } from 'antd'
import { User } from './search-panel';
import { Link } from 'react-router-dom'
export interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string
}
interface SearchPanelProps extends TableProps<Project> {
    users: User[];
}
export const List = ({ users, ...props }: SearchPanelProps) => {

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
            render(value: any, project: any) {
                // 可以直接传递动态路由参数，因为此路由是在/projects进入的，所以会拼接
                return <Link to={`${project.id}`}>{value}</Link>
            }

        },
        {
            title: '负责人',
            dataIndex: 'personId',
            key: 'personId',
            render: (v: string) => users.find((item) => item.id === v)?.name
        },
    ];
    return <Table columns={columns} {...props} />;
}