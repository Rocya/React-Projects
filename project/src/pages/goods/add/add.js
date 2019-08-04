import React,{Component,Fragment} from 'react'
import {Card,Button,Input,Select,Upload,Icon,message} from 'antd'
import './add.less'
const { Option } = Select;
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',//上传地址
    headers: {
      authorization: 'authorization-text',//设置上传的请求头部,IE10以上有效
    },
    multiple:true,//是否支持上传多个文件
    directory:false,//是否支持上传文件夹
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功!`,1);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败!`,1);
      }
    }
  }
class Add extends Component{
    constructor(){
        super()
        this.state={
            form:{
                name:'',
                price:'',
                theme:'',
                type:'',
                createTime:'',
                img:'',
                desc:''
            }
        }
    } 
    submit=()=>{
        let newData=JSON.parse(JSON.stringify(this.state.form))
        let data = new Date()       
        let y = data.getFullYear()
        let m = data.getMonth() + 1
        let d = data.getDate()
     　 let newTime =y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + data.toTimeString().substr(0, 8)
        newData.createTime=newTime
        this.setState({form:newData})
    }
    clear=()=>{
        let form={
            name:'',
            price:'',
            theme:'',
            type:'',
            createTime:'',
            img:'',
            desc:''
        }
        this.setState({form})
        
    }
    changeTheme=(value)=>{
        let newData=JSON.parse(JSON.stringify(this.state.form))   
        newData.theme=value
        this.setState({form:newData})             
        //console.log(value,newData.theme)
    }
    changeType=(value)=>{
        let newData=JSON.parse(JSON.stringify(this.state.form))   
        newData.type=value
        this.setState({form:newData})             
        //console.log(value,newData.type)
    }
    
    render(){
        let {form}=this.state
        //console.log(form)
        return(
            <Fragment>
            <Card title='商品添加' className='add-content' >
                <Card className='add-form' style={{ marginLeft: 100}}> 
                    名称:<Input type='text' value={form.name} allowClear
                            onChange={(e)=>{
                            form.name=e.target.value
                            this.setState({form}) 
                        }}/>
                    价格:<Input type='text' value={form.price} allowClear
                            onChange={(e)=>{
                                form.price=e.target.value
                            this.setState({form}) 
                        }}/>
                    描述:<Input type='text' value={form.desc} allowClear
                            onChange={(e)=>{
                            form.desc=e.target.value
                            this.setState({form}) 
                            }} />
                    主题类型:<Select
                                showSearch
                                style={{ width: 200 ,margin:10}}                                
                                optionFilterProp="children"                               
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={this.changeTheme}
                                value={form.theme?form.theme:'Select a theme'}
                                >      
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select><br/>                                
                    菜品类型:<Select
                                showSearch
                                style={{ width: 200 ,marginLeft:10}}
                                placeholder="Select a type"
                                optionFilterProp="children"                               
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={this.changeType}
                                value={form.type?form.type:'Select a type'}                                
                                >      
                                <Option value="热菜">热菜</Option>
                                <Option value="凉菜">凉菜</Option>
                                <Option value="特色菜">特色菜</Option>
                            </Select><br/>
                    图片上传:<Upload {...props} >
                            <Button style={{margin:10}}>
                            <Icon type="upload" />点击上传
                            </Button>
                        </Upload>
                </Card>                
                <Button onClick={this.submit} type="primary" className='button-content'>提交</Button>
                <Button onClick={this.clear} type='danger'  className='button-content'>清空</Button>
            </Card>
            </Fragment>
        )
    }
}
export default Add