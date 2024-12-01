
import {
    Modal, Input, notification,
    Select, Form, InputNumber, Row, Col
} from 'antd';
const { Option } = Select;

interface IProps {
    access_token?: string | undefined;
    isCreateModalOpen: boolean;
    setIsCreateModalOpen: (v: boolean) => void;
}

const CreateUser = (props: IProps) => {

    const {
        access_token,
        isCreateModalOpen, setIsCreateModalOpen
    } = props;

    const [form] = Form.useForm();

    const handleCloseCreateModal = () => {
        form.resetFields()
        setIsCreateModalOpen(false);

    }

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const { name, email, password, age, gender, role, address } = values;

        const data = { name, email, password, age, gender, role, address };
        const res = await fetch(
            "http://localhost:8000/api/v1/users",
            {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

        const d = await res.json();
        if (d.data) {
            //success
            notification.success({
                message: "Tạo mới user thành công.",
            })
            handleCloseCreateModal();
        } else {
            ///
            notification.error({
                message: "Có lỗi xảy ra",
                description: JSON.stringify(d.message)
            })
        }
    };

    return (
        <Modal
            title="Add new user"
            open={isCreateModalOpen}
            onOk={() => form.submit()}
            onCancel={() => handleCloseCreateModal()}
            maskClosable={false}
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
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
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

export default CreateUser;