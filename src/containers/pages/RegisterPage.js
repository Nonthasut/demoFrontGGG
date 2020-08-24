import React from 'react'
import axios from '../../config/axios'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, notification,  Select,  Row, Col } from 'antd'


function RegisterPage(props) {

    const [form] = Form.useForm();

    const { Option } = Select;

    

    const onFinish = values => {
        console.log('Received values of form: ', values);

        const body = {
            username: values.username,
            password: values.password,
            name: values.name,
            idCardNumber: values.idCardNumber,
            // gender: values.gender,
            phone: values.phone,
            address: values.address
        }

        axios.post('/users/register', body)
            .then(res => {
                notification.success({
                    message: `Thank you for register, Account is ready to use.`
                })
                props.history.push('/login')
            })
            .catch(err => {
                notification.error({
                    message: `User already taken or Something is wrong.`
                })
            })
    };


    return (
        <div>

            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >

                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter username',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('Confirm password confirmation do not much.');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="idCardNumber"
                    label="Id card number"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your id card number',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
               
                <Form.Item
                    name="phone"
                    label="Phone number"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your phone number',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
       
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your address',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item 
                name="gender" 
                label="Gender" 
                rules={[{ required: true }]}>
                 <Select >
                        <Option value={"male"}>male</Option>
                        <Option value={"female"}>female</Option>
                       
                    </Select>
                </Form.Item> */}

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default withRouter(RegisterPage)
