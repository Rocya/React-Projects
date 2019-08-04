import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import {Card,Button} from 'antd'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'
import './medol.less'
class Medol extends Component {
  jumpLogin=()=>{
    this.props.history.push('/login')
    this.props.changeTokenState(false)
  }
  signOut=()=>{
    this.props.changeTokenState(false)
  }
  render(){
    return(
        <Fragment>
            {!this.props.tokenState||<div className='medol-content'>
                <Card className='medol-contentCard'>
                    <h3>登录已过期,请重新登录!</h3>
                    <Button onClick={this.jumpLogin}>重新登录</Button>
                    <Button onClick={this.signOut}>取消</Button>
                </Card>
            </div>}
      </Fragment>
    )
  }
}


export default connect((state)=>state,(dispatch)=>{
    return bindActionCreators(ActionCreator,dispatch)
})(withRouter(Medol))