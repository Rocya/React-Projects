import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react'
import {Spin} from 'antd'
import Tab2Data from './userData2'
class Tab2 extends Component {
  constructor(){
    super()
    this.state={
      loading:true,
      option : {
        title: {
            text: '浏览器使用占比',
            subtext: '自2001年',
            top: 10,
            left: 40
        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        legend: {
            type: 'scroll',
            bottom: 10,
            data: []
        },
        visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
        },
        radar: {
           indicator : [
               { text: 'IE8-', max: 400},
               { text: 'IE9+', max: 400},
               { text: 'Safari', max: 400},
               { text: 'Firefox', max: 400},
               { text: 'Chrome', max: 400}
            ]
        },
        series : []
    }
    }
  }
  componentDidMount(){
      this.setState({loading:true}) 
      let newData = JSON.parse(JSON.stringify(this.state.option))
        newData.legend.data=Tab2Data.legend.data
        newData.series=Tab2Data.series
      this.setState({option:newData,loading:false})         
  }
  render(){
    let {loading}=this.state
    return(        
        <div>
          <Spin spinning={loading} tip="Loading...">
            <ReactEcharts option={this.state.option}></ReactEcharts>
          </Spin>
        </div>        
    )
  }
}


export default Tab2;