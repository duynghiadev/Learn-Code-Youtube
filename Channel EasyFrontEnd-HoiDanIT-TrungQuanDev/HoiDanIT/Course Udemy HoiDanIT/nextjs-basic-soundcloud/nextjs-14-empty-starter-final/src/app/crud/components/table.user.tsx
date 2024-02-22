'use client'
import { Table, Button, Popconfirm, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined, DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CreateUser from './create.user';
import { useState } from 'react';
import UpdateUser from './update.user';
import { deleteUserAction } from '../actions';

interface DataType {
    _id: string;
    email: string;
    name: string;
    role: string;
}

interface IProps {
    raw: {
        message: string;
        data: any;
    }
    access_token?: string;
}
const TableUser = (props: IProps) => {
    const { raw, access_token } = props;

    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
    const [dataUpdate, setDataUpdate] = useState<any>(null);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleDeleteUser = async (user: any) => {
        const d = await deleteUserAction(user, access_token)
        if (d.data) {
            notification.success({
                message: "Xóa user thành công."
            })
        } else {
            notification.error({
                message: JSON.stringify(d.message)
            })
        }
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },

        {
            title: 'Actions',
            align: "center",
            render: (text, record, index) => {
                return (
                    <>
                        <EditTwoTone
                            twoToneColor="#f57800" style={{ cursor: "pointer", margin: "0 20px" }}
                            onClick={() => {
                                setIsUpdateModalOpen(true);
                                setDataUpdate(record);
                            }}
                        />

                        <Popconfirm
                            placement="leftTop"
                            title={"Xác nhận xóa user"}
                            description={"Bạn có chắc chắn muốn xóa user này ?"}
                            onConfirm={() => handleDeleteUser(record)}
                            okText="Xác nhận"
                            cancelText="Hủy"
                        >
                            <span style={{ cursor: "pointer" }}>
                                <DeleteTwoTone twoToneColor="#ff4d4f" />
                            </span>
                        </Popconfirm>
                    </>
                )
            }
        }
    ];

    const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        if (pagination && pagination.current) {
            const params = new URLSearchParams(searchParams);
            params.set('page', pagination.current);
            replace(`${pathname}?${params.toString()}`);
        }
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Table List Users</span>
                <Button
                    icon={<PlusOutlined />}
                    type="primary"
                    onClick={() => setIsCreateModalOpen(true)}
                >
                    Thêm mới
                </Button>
            </div>
        )
    }

    return (
        <>
            <Table
                title={renderHeader}
                columns={columns}
                dataSource={raw?.data?.result ?? []}
                bordered
                // pagination={raw?.data?.meta}
                pagination={
                    {
                        ...raw?.data?.meta,
                        // current: current,
                        // pageSize: pageSize,
                        // total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }
                }
                onChange={onChange}
                rowKey="_id"
            />
            <CreateUser
                access_token={access_token}
                isCreateModalOpen={isCreateModalOpen}
                setIsCreateModalOpen={setIsCreateModalOpen}
            />
            <UpdateUser
                access_token={access_token}
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </>
    )
}
export default TableUser;