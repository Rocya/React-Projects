import React,{Component} from 'react'
import Son1 from './son1'
import Son2 from './son2'
import {connect} from 'react-redux'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
class Father extends Component{
    
    render(){
        let {age}=this.props
        console.log(this.props)
        return (
            <div>
                    <button onClick={(e)=>{this.props.changeName('李四')}}>changeName</button>
                    <Son1></Son1>
                    <button onClick={(e)=>{this.props.changeAge(age)}}>changeAge</button>
                    <Son2></Son2>
            </div>
        )
    }
}

export default connect((state)=>state,(dispatch)=>{return bindActionCreators(ActionCreator,dispatch)})(Father)