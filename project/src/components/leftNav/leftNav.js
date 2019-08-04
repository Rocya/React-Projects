import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import {withRouter} from 'react-router-dom'
//import NavData from './navData'
import ActionCreator from '../../store/actionCreator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
let {SubMenu} = Menu
class LeftNav extends Component {
  constructor(){
    super()
    this.state={

    }
  }
  jump=(path,bread)=>{
    this.props.history.push(path)
    this.props.changeNav(path)
    this.props.changeBread(bread)
  }
  renderItem=(itemData)=>{
    return itemData.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={
            <span><Icon type={item.icon}/>
              <span>{item.title}</span>
            </span>} key={item.key} >
            
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
          <Menu.Item key={item.key} onClick={
            (e)=>{this.jump(item.path,item.bread)}
          }>
            {<span><Icon type={item.icon}/>
              <span>{item.title}</span>
            </span>}
          </Menu.Item>
        )
      }
    })
  }
  renderNav(NavData){
    return(    
      <Menu theme='dark' defaultSelectedKeys={['0']}>
        {this.renderItem(NavData)}
      </Menu>
    )
  }
  render(){
    let NavData=JSON.parse(localStorage.getItem('rootList'))
    return(
      <div>       
         {this.renderNav(NavData)}
      </div>
    )
  }
}


export default connect((state)=> state,(dispath)=>{
  return bindActionCreators(ActionCreator,dispath)
})(withRouter(LeftNav));