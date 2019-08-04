import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from './App'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import User from './pages/user/user'
import Home from './pages/home/home'
import VipAdd from './pages/vip/vipAdd'
import VipUpdate from './pages/vip/vipUpdate'
import GoodsList from './pages/goods/list/list'
import GoodsAdd from './pages/goods/add/add'
import Echarts from './pages/echarts/echarts'
import Medol from './components/medol/medol'
class GlobalRouter extends Component {
  
  render(){
    return(
        <App>
            <BrowserRouter>
                <Medol></Medol>
                <Switch>
                    
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                      return (                       
                        <Admin>
                            <Route path='/admin/goods' render={()=>{
                              return(
                                <Switch>
                                  <Route path='/admin/goods/list' component={GoodsList}/>
                                  <Route path='/admin/goods/add' component={GoodsAdd}/>
                                </Switch>
                              )
                            }
                            }/>
                            <Route path='/admin/user' component={User}/>
                            <Route path='/admin/home' component={Home}/>
                            <Route path='/admin/chart' component={Echarts}/>
                            <Route path='/admin/vip' render={()=>{
                              return(
                                <Switch>
                                  <Route path='/admin/vip/add' component={VipAdd}/>
                                  <Route path='/admin/vip/update' component={VipUpdate}/>
                                </Switch>
                              )
                            }
                            }/>
                        </Admin>
                      )
                    }}></Route>

                </Switch>
            </BrowserRouter>
        </App>
    )
  }
}


export default GlobalRouter;