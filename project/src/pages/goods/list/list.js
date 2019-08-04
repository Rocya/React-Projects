import React,{Component,Fragment} from 'react'
import {Card,Table,Button,Pagination,Spin,message,Popconfirm} from 'antd'
import UpdateModel from '../update/update'
import './list.less'
class List extends Component{
    constructor(){
        super()
        this.state={
            dataSourceAll:[],
            dataSource:[],
            loading:true,
            model:false,
            updateData:[]
        }
    }
    columns=[
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            width:80,
            fixed:'left'
          },
          {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            width:100,
            fixed:'left',
            sorter:(a,b)=>a.price-b.price
          },
          {
            title: '主题类型',
            dataIndex: 'themeid',
            key: 'themeid',
            width:100
          },
          {
            title: '菜品类型',
            dataIndex: 'type',
            key: 'type',
            width:100,
            render(typeid) {
              let arr=['热菜','凉菜','酒水','特色菜']
              return (
                <span>{arr[typeid]}</span>
              )
            }
          },
          {
            title: '单位',
            dataIndex: 'unit',
            key: 'unit',
            width:80
          },
          {
            title: '创建时间',
            dataIndex: 'ctime',
            key: 'ctime',
            width:150
          },
          {
            title: '图片',
            dataIndex: 'img',
            key: 'imgPath',
            render:(item)=>{    
              return(
                <img src={item} width='80' height='50' alt=""/>
              )
            }
          },
        {
          title: '图片',
          dataIndex: 'img',
          key: 'imgPath1',  
          render:(item)=>{      
            return(
              <img src={item} width='80' height='50' alt=""/>
            )
          }
        },
        {
          title: '图片',
          dataIndex: 'img',
          key: 'imgPath2',
          render:(item)=>{    
            return(
              <img src={item} width='80' height='50' alt=""/>
            )
          }
        },
        {
            title:'操作',
            key:'action',
            fixed:'right',
            width:100,
            render:(recored)=>{
                return(
                    <Fragment>
                      <Popconfirm 
                      title='你确定删除吗?' onConfirm={this.del.bind(this,recored._id)}>
                        <Button size='small' type='danger'>删除</Button>
                      </Popconfirm>  
                        <Button size='small' type='primary'
                        onClick={this.update.bind(this,recored)}>修改</Button>
                    </Fragment>
                )
            }
        }
    ]
    modelClose=(code)=>{
      if(code===0){
        this.refreshData(1,10)
      }
      this.setState({model:false})
    }
    update=(recored)=>{
      this.setState({model:true,updateData:recored})
    }
    del=(id)=>{
        console.log('删除',id)
        let url='https://www.easy-mock.com/mock/5c2e9b8b7096eb383e0cc291/example/delProduct'
        this.axios.post(url,{id})
        .then((res)=>{
          console.log(res)
          if(res.err===0){
            //删除ok更新界面
            message.success('删除成功',0.5,()=>{
              this.refreshData(1,10)
            })           
          }else{
            message.error('删除失败请重试',0.5)
          }
          console.log(res)
        })
      }
    componentDidMount(){
        this.refreshData(1,5)
    }
    refreshData=(page,pagesize)=>{
        this.setState({loading:true})
        let url='https://www.easy-mock.com/mock/5c2e9b8b7096eb383e0cc291/example/goods'
        this.axios.post(url,{page,pagesize})
        .then((res)=>{
            this.setState({dataSourceAll:res.data,loading:false,dataSource:res.data})
        })
    }
    pageChange=(page,pagesize)=>{
        this.refreshData(page,pagesize)
    }
    typeChange=(e)=>{
      let typeId=e.target.value
      let dataSource=this.state.dataSourceAll
      let newData=dataSource.filter((item)=>{
        return item.type===typeId
      })
      this.setState({dataSource:newData})
    }
    render(){
        let {dataSource,loading,model,updateData}=this.state
        return(
            <Card title='商品列表' >
              查询(类别):<select name='' id='' onChange={this.typeChange}>
                <option value={1}>热菜</option>
                <option value={2}>凉菜</option>
                <option value={3}>酒水</option>
                <option value={4}>特色菜</option>
              </select>
                <Spin spinning={loading}>
                    <Table columns={this.columns}
                        dataSource={dataSource}
                        scroll={{y:250,x:1033}}
                        pagination={false} 
                    />
                </Spin>
                <Pagination simple defaultCurrent={1} total={50}
                    onChange={this.pageChange} className='pagination-content'/>
                    {!model||<UpdateModel modelClose={this.modelClose} data={updateData} />}
            </Card>
        )
    }
}
export default List