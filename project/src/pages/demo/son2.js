import React,{Component} from 'react'
import {connect} from 'react-redux'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
class Son2 extends Component{
 
    render(){
        let {age}=this.props
        return (
            <div>
                age:{age}
            </div>
        )
    }
}

export default connect((state)=>state,(dispatch)=>{return bindActionCreators(ActionCreator,dispatch)})(Son2)