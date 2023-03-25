import React, {useState} from 'react';
import { useAuth } from '../../Context/Context';
import { axiosInstance } from '../../axiosInstance';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Notification from '../../components/Notification/Notification';
import {Button, Form, Input } from 'antd';
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
const{ email,setEmail,password, setPassword} = useAuth()
const [error, setError] = useState('')
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

const handleSubmit = async (e) => {
   try{
    e.preventDefault();
        const  res  = await axiosInstance.post('/auth/signin', {
          email: email,
          password: password
        });
        console.log('data', res)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        window.location = "accueil";
    } catch (error) {
        console.log('error',error.response.data.error)
        setError(error.response.data.error)
    }

};
  return (
    <div className='login-div'>
     <p className='titre-page'> Login Interface </p>
    <h5 className='notification'> {error ? <Notification msg={error} />: " "} </h5>
    <Form
    onSubmit={handleSubmit}
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
  >
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
          
        },
      ]}

    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} 
       value={email}
       onChange={handleEmailChange}
       placeholder="Email" className='input-form' />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}        
      value={password}
      onChange={handlePasswordChange}
        type="password"
        placeholder="Password"
        className='input-form'
      />
    </Form.Item>
    <Form.Item>
     <Link to="forget-password" className="login-form-forgot">
        Forgot password ?
     </Link>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit"
      onClick={handleSubmit} className="login-form-button">
        Login
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
}

export default Login
