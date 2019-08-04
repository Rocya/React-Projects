import React,{Component,Fragment} from 'react';
import {Breadcrumb,Icon} from 'antd'
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import {connect} from 'react-redux'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
class AdminHeader extends Component {
  // componentDidMount(){
  //   Store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  constructor(){
    super()
    this.state={
        time:'╰︶﹉⋛๑0.0๑⋚﹉︶╯',
        bg:'rgb(24,144,255)'
    }
  }
  breadcrumbAdd=(bread,path)=>{
    return (
              <BreadcrumbItem href='javascript::void(0)'>
                {bread}
              </BreadcrumbItem>
      )
                 
  }
  componentDidMount(){
    let changeData=()=>{
      let data = new Date()       
      let y = data.getFullYear()
      let m = data.getMonth() + 1
      let d = data.getDate()
      let newTime =y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + data.toTimeString().substr(0, 8)
      let randomNum=(n,m)=>{
        let num = parseInt(Math.random() * (n - m + 1) + m);
        return num
      }
      let 
      r = randomNum(0,255),
      g = randomNum(0,255),
      b = randomNum(0,255)
      let bg= '('+r+','+g+','+b+')'
      this.setState({time:newTime,bg})
    }
    setInterval(changeData,1000)            
  }
  render(){
    let {bread,path} = this.props
    let bg=this.state.bg
    console.log(bg)
    return(
      <Fragment>
        <div>
        <div style={{float:"left"}}>           
          {/* <button onClick={(e)=>{this.props.changeAge(age)}}>change</button>
          age:{age} */}
          <Breadcrumb >
              <BreadcrumbItem href='/admin/home'>
                  <Icon type='user'/>
              </BreadcrumbItem>
              {
                this.breadcrumbAdd(bread,path)
              }                      
          </Breadcrumb>
        </div>
        <span style={{width:200,float:"right",
        color:'rgb'+bg}}>现在时刻:{this.state.time}</span> 
        </div> 
        <hr style={{clear:"both"}}/>      
      </Fragment>
    )
  }
}

let newComponent = connect((state)=>state,(dispatch)=>{return bindActionCreators(ActionCreator,dispatch)})(AdminHeader)
export default newComponent;