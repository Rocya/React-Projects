import React,{Component} from 'react';
import LeftNav from '../../components/leftNav/leftNav'
import AdminHeader from '../../components/adminHeader/adminHeader'
import Headers from '../../components/header/header'
import Bottom from '../../components/bottom/bottom'
import './admin.less'
import {Layout,Row} from 'antd'
const { Header, Content, Sider } = Layout;


class Admin extends Component {
  constructor(){
    super()
    this.state={
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  }; 
  render(){
    return(
      <div className='admin-content'>
          <Layout className='admin-cont'>
              <Header  className='content-top'> 
                   <Headers/>          
              </Header>
              <Layout>
                <Sider className='content-left' collapsible 
                collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                  <LeftNav ></LeftNav>
                </Sider>
                <Layout className='content-right'>
                    <Row>
                      <AdminHeader></AdminHeader>
                    </Row>
                    <Row>
                      <Content className='right-cont'>
                        {this.props.children}                                          
                      </Content> 
                    </Row>
                    <Row>
                      <Bottom/>
                    </Row>                            
                </Layout>                  
              </Layout>                
          </Layout>
      </div>
    )
  }
}

export default Admin;