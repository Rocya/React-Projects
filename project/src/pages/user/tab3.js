import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react'
import {Spin} from 'antd'
import Tab3Data from './userData3'
class Tab2 extends Component {
  constructor(){
    super()
    this.state={
      loading:true,
      option : {
        title: {
            text: '关系图',
            subtext: '最新版',
            top: 10,
            left: 40
        },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 10,
            inRange: {
                color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
            }
        },
        series: {
            type: 'sunburst',
            data: [],
            radius: [0, '100%'],
            label: {
                rotate: 'radial'
            }
        }
    }
    }
  }
  componentDidMount(){
      this.setState({loading:true}) 
      let newData = JSON.parse(JSON.stringify(this.state.option))
      newData.series.data=Tab3Data  
      this.setState({option:newData,loading:false})         
  }
  render(){
    let {loading}=this.state
    return(        
        <div>
          <Spin spinning={loading}>
            <ReactEcharts option={this.state.option}></ReactEcharts>
          </Spin>
        </div>        
    )
  }
}


export default Tab2;