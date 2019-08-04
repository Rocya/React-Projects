import React,{Component} from 'react'
import {connect} from 'react-redux'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
class Son1 extends Component{

    render(){
        let {name}=this.props
        console.log(this.props)
        return (
            <div>
                name:{name}
            </div>
        )
    }
}

export default connect((state)=>state,(dispatch)=>{return bindActionCreators(ActionCreator,dispatch)})(Son1)