import React from 'react';
import './index.less'
function App(props){ 
    return(
      <div id='app'>
          {props.children}
        </div>
    )
}

export default App;


// import React,{Component} from 'react';
// // import Api from './config/api'
// // import {Button} from 'antd'
// class App extends Component {
//   constructor(){
//     super()
//   }
//   componentDidMount(){
//     // this.axios.get(Api.baidu)
//     // .then((res)=>{
//     //   //console.log(res)
//     // })
//   }
//   render(){
//     return(
//       <div id='app'>
//           {/* aaa
//           <Button>ada</Button> */}
//           {this.props.children}
//       </div>
//     )
//   }
// }

