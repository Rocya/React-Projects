import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Menu,Input,Icon,Avatar,Badge,Dropdown,Drawer,message,Tooltip} from 'antd'
import './header.less'
const { Search } = Input;
   
class Headers extends Component {
    constructor(){
        super()
        this.state={
          visible: false,
           menu1 : (
            <Menu onClick={this.signOut}>
              <Menu.Item key="1">
                <Icon type="home" />
                  个人中心
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="tool" />
                  个人设置
              </Menu.Item>
              <hr/>
              <Menu.Item key="3" >     
                <Icon type="import" />
                  退出
              </Menu.Item>
            </Menu>
          ),
           menu2 : (
            <Menu>
              <Menu.Item key="1">
                <Icon type="global" />
                  语言设置
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="smile" />
                  主题设置
              </Menu.Item>
              <Menu.Item key="3">     
                <Icon type="lock" />
                  系统设置
              </Menu.Item>
            </Menu>
          ) 
        }
      }
      signOut=({key})=>{
        if(key==3){
          message.loading('退出中...',1,()=>{
            this.props.history.push('/login')
          })          
          localStorage.clear()
        }
      } 
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    userChange=(user)=>{
      if(user){
        return (<Avatar size='small' src={user} />)
        }else{
          return (<Avatar icon='user' size='small'/>)
        }
    }
    nameChange=(name)=>{
      if(name){
        return (<span ref='name'>{name}</span>)
        }else{
          return (<span ref='name'>请登录</span>)
        }
    }
  render(){
    let user=localStorage.getItem('user')
    let name=localStorage.getItem('name')
    return(
      <div className='header-content'>
          <div className='logo' />
          <div className='header-title'>
            后台管理系统
          </div>
          <Search className='search-icon'/>
          <div className='header-user'>                                                          
            <Dropdown overlay={this.state.menu1} placement='bottomCenter' >
               {this.userChange(user)}
            </Dropdown>
            {this.nameChange(name)}
            <Tooltip placement="bottom" title="消息" arrowPointAtCenter>
              <Badge dot>
                <Icon type='message'>
                </Icon>
              </Badge>
            </Tooltip> 
            <Dropdown overlay={this.state.menu2} placement='bottomCenter'>
              <Icon type='setting' />
            </Dropdown>       
            <Icon type="menu" onClick={this.showDrawer}/>
            <Drawer
              title="Create a new account"
              width={400}
              onClose={this.onClose}
              visible={this.state.visible}
            ></Drawer>
          </div>
      </div>
    )
  }
}


export default withRouter(Headers);