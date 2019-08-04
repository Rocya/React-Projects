import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react'
import UserData from './userData'
import {Tabs,Spin} from 'antd'
import Tab2 from './tab2'
import Tab3 from './tab3'
import './user.less'
const {TabPane} =Tabs
class User extends Component {
  constructor(){
    super()
    this.state={
      loading:true,
      option:{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data:[]
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '美元',
            min: 0,
            max: 200,
            interval: 20,
            axisLabel: {
              formatter: '${value} 千万'
            }
          },
          {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series:[]
      }
    }
  }
  componentDidMount(){
      this.setState({loading:true}) 
      console.log(UserData)
      let newData = JSON.parse(JSON.stringify(this.state.option))
      newData.series=UserData
      
        UserData.map((item,index)=>{
          newData.legend.data.push(item)
      })      
      this.setState({option:newData,loading:false})         
  }
  render(){
    let {loading}=this.state
    return(
      <Tabs defaultActiveKey='1' className='tab'>        
          <TabPane tab='销售数据' key='1' >
            <Spin spinning={loading} tip="Loading...">
              <ReactEcharts option={this.state.option}></ReactEcharts>
            </Spin>
          </TabPane>        
        <TabPane tab='使用占比' key='2'>
          <Tab2/>
        </TabPane>
        <TabPane tab='合作伙伴' key='3'>
          <Tab3/>
        </TabPane>
      </Tabs>
    )
  }
}


export default User;