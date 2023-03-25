import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../../axiosInstance';
import {Button, Form, Input } from 'antd';
import "../Login/login.css"
import Notification from '../../components/Notification/Notification';
const ResetPassword = () => {
  const { userId, token } = useParams();
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  console.log('userId', userId)
  console.log('token', token)
  const navigate = useNavigate();
  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  console.log('input', input)
    const handleSubmit = async (e) => {
  try {
    
    e.preventDefault();
    const res = await axiosInstance.patch(`/auth/requestResetPassword`,
      {
        
        password: input.newPassword,
         token : token,
        
        },
    );
    console.log('res', res)
  if (input.newPassword !== input.confirmPassword)  {
    
    console.log("confirme password n'est pas correct");
    setError("confirm password is not correct")
  }
  else{
    console.log("password changed Successfully");
    setError("password changed Successfully")
    setSuccess(true)
    navigate("/");
  }
  } catch (error) {
    console.log('error', error)
    setError ("confirm password is not correct")
        setSuccess(!success)
    // alert("confirme password n'est pas correct");
  }
    };
    return (
      <div className='login-div'>
      <p className='titre-page'> Forget Password? </p>
    
      <h5 style={ { color: !success ? 'red' :' green' }}> {error ?  <Notification msg={error} />:' ' } </h5>
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
     <input
     type="password"
     id=""
     placeholder="Enter New Password"
     className='input-form'
     name="newPassword"
     value={input.newPassword}
     onChange={(e) =>
       setInput({
         ...input,
         [e.target.name]: e.target.value,
       })
     }
   />
   <input
   type="password"
   id=""
   placeholder="Enter Confirm Email"
   className='input-form'
   name="confirmPassword"
   value={input.confirmPassword}
   onChange={(e) =>
     setInput({
       ...input,
       [e.target.name]: e.target.value,
     })
   }
 />
     </Form.Item>
 
     <Form.Item>
       <Button type="primary" htmlType="submit"
       onClick={handleSubmit} className="login-form-button">
       Change Password
       </Button>
     </Form.Item>
   </Form>
   </div>

    
    );
  };

export default ResetPassword
