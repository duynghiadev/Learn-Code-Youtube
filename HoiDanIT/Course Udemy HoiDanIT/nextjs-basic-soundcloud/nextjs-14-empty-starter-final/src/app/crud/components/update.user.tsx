
import {
    Modal, Input, notification,
    Select, Form, InputNumber, Row, Col
} from 'antd';
import { useEffect } from 'react';
import { updateUserAction } from '../actions';
import { useState } from 'react';

const { Option } = Select;

interface IProps {
    access_token?: string | undefined;
    isUpdateModalOpen: boolean;
    setIsUpdateModalOpen: (v: boolean) => void;
    dataUpdate: any;
    setDataUpdate: any;
}

const UpdateUser = (props: IProps) => {
    const [isSubmit, setIsSubmit] = useState(false);

    const {
        access_token,
        isUpdateModalOpen, setIsUpdateModalOpen,
        dataUpdate, setDataUpdate
    } = props;

    const [form] = Form.useForm();

    useEffect(() => {
        if (dataUpdate) {
            //code
            form.setFieldsValue({
                name: dataUpdate.name,
                email: dataUpdate.email,
                age: dataUpdate.age,
                address: dataUpdate.address,
                role: dataUpdate.role,
                gender: dataUpdate.gender,
            })
        }
    }, [dataUpdate])

    const handleCloseUpdateModal = () => {
        form.resetFields()
        setIsUpdateModalOpen(false);
        setDataUpdate({})
    }

    const onFinish = async (values: any) => {
        const { name, email, age, gender, role, address } = values;
        setIsSubmit(true);
        if (dataUpdate) {
            const data = {
                _id: dataUpdate._id, //undefined
                name, email, age, gender, role, address
            }

            const d = await updateUserAction(data, access_token);
            if (d.data) {
                //success
                notification.success({
                    message: "Cập nhật user thành công.",
                })
                handleCloseUpdateModal();
            } else {
                ///
                notification.error({
                    message: "Có lỗi xảy ra",
                    description: JSON.stringify(d.message)
                })
            }
        }
        setIsSubmit(false);
    };

    return (
        <Modal
            title="Add new user"
            open={isUpdateModalOpen}
            onOk={() => form.submit()}
            onCancel={() => handleCloseUpdateModal()}
            maskClosable={false}
            confirmLoading={isSubmit}
        >
            <Form
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                form={form}
            >
                <Row gutter={[15, 15]}>
                    <Col span={24} md={12}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input type='email' />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item
                            label="Age"
                            name="age"
                            rules={[{ required: true, message: 'Please input your age!' }]}
                        >
                            <InputNumber
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                        >
                            <Input.Password disabled />
                        </Form.Item>

                    </Col>

                    <Col span={24} md={12}>
                        <Form.Item
                            name="gender" label="Gender" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                            >
                                <Option value="MALE">male</Option>
                                <Option value="FEMALE">female</Option>
                                <Option value="OTHER">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={24} md={12}>
                        <Form.Item
                            name="role" label="Role" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                            >
                                <Option value="USER">User</Option>
                                <Option value="ADMIN">Admin</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={24} md={24}>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>


                </Row>
            </Form>
        </Modal>
    )
}

export default UpdateUser;