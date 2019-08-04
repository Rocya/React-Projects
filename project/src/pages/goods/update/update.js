import React,{Component} from 'react'
import {Card,message,Button} from 'antd'
import './update.less'
class goodsUpdate extends Component{
    submit=()=>{
        let url='https://www.easy-mock.com/mock/5c2e9b8b7096eb383e0cc291/example/update'
        this.axios.post(url,{})
        .then((res)=>{
            if(res.err===0){
                message.loading('正在提交...',1)
                .then(()=>message.success('修改成功',0.5,()=>{
                    this.props.modelClose(0)})
                )
            }else{
                message.error('修改失败请重试!')
            }
        })
    }
    cancel=()=>{
        this.props.modelClose(1)
    }
    render(){
        return(
            <div className='updateModel'>
                <Card title='商品修改' className='updateModel-content'>
                    <Button onClick={this.submit}>修改</Button>
                    <Button onClick={this.cancel}>取消</Button>
                </Card>
            </div>
        )
    }
}
export default goodsUpdate