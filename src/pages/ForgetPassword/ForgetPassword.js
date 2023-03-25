import React, {useState} from 'react';
import { Button, Form, Input, message } from 'antd';
import "./ForgetPage.css";
import { axiosInstance } from '../../axiosInstance';
import Notification from '../../components/Notification/Notification';
const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    try{
     e.preventDefault();
  
         const  res  = await axiosInstance.post('/auth/forgetPassword',{
          email
        });
    console.log('status', res)
    let result =  res.data.status
    if(result){
      setError(result)
      setSuccess(true)
    }
      
     } catch (error) {
        setError (error.response.data.message)
        setSuccess(!success)
         console.log('error', error.response)
     }
 };
  return (
    <div className='forget-div'>
    <p className='titre-page'> Mot de passe oublié ? </p>
   
    <h5 style={ { color: !success ? 'red' :' green' }}> {error ?  <Notification msg={error} />:' ' } </h5>
    <Form
    onSubmit={handleSubmit}
    className="form-forgot"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        className="input-email"
      >
        <Input  value={email} type="email"
        onChange={handleEmailChange}  />
      </Form.Item>  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" className="forget-form-button" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default ForgetPassword
