import React,{Component} from 'react';
import {Card,Form,Icon,Input,Button,Checkbox,message} from 'antd'
import './login.less'
class Login extends Component {
  login=()=>{
    this.props.form.validateFields((err,data)=>{
      if(err){
        message.error('输入错误,请重试!',1)
      }else{
        this.axios.post('/dev/admin/user/login',data)
        .then((res)=>{
          console.log('登录成功',res)
          if(res.err===0){
            localStorage.setItem('user',res.user)
            localStorage.setItem('name',res.name)
            localStorage.setItem('token',res.token)
            localStorage.setItem('rootList',JSON.stringify(res.rootList))
            message.loading('登录成功,正在跳转...',1,()=>{
              this.props.history.push('/admin/home')
            })
          }
        })
      }
    })
  }
  render(){
    const {getFieldDecorator} =this.props.form;
    return(
      <div className='login'>
      <Card className='login-card'>
      <Form className='login-form'>
        <Form.Item>
          {getFieldDecorator('us',{
            rules:[{required:true,message:'用户名不能为空'},
                  {max:10,message:'用户名最大长度为10'}
            ]
          })(<Input placeholder='Username'
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> } />)}      
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('ps',{
            rules:[{required:true,message:'密码不能为空'},
                  {max:10,message:'密码最大长度为10'}
            ]
          })(<Input type='password'  placeholder='Password'
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>)
        }
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}         
          <Button type='primary' className='login-form-button' onClick={this.login}>
          登录
          </Button>
          <a href=''>立即注册</a>
          <a className="login-form-forgot" href="">忘记密码？</a>
        </Form.Item>
      </Form>
      </Card>
      </div>
    )
  }
}


export default Form.create()(Login);