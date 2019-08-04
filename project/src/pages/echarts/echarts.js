import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react'
class Echarts extends Component {
  constructor(){
    super()
    this.state={
      breakFast:{
        title : {
          text: '食品列表',
          subtext: '早餐',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: []
      },
        series:[
          {
            name:'',
            type:'pie',
            radius : '55%',
            center:['50%','60%'],
            data:[
              {value:335,name:'空'}
            ],
            itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
  componentDidMount(){
    this.axios.post('/dev/admin/chart/breakfast',{})
    .then((res)=>{
      //console.log('chart请求')
      let newData = JSON.parse(JSON.stringify(this.state.breakFast))
      newData.series[0].name=res.data.name
      newData.series[0].data=res.data.list
      newData.legend.data=res.data.list.name
      this.setState({breakFast:newData})
    })
  }
  shouldComponentUpdate(props,state){
    return true
  }
  render(){
    return(
      <div>
          <ReactEcharts option={this.state.breakFast}></ReactEcharts>
      </div>
    )
  }
}


export default Echarts;