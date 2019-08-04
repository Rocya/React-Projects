import React,{Component} from 'react';
import {Icon} from 'antd'
import './bottom.less'
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
class Bottom extends Component {
  
  render(){
    return(
        <div className='admin-bottom'>                     
            {<div className="icons-list">版权所有 &copy; 2019 &nbsp;&nbsp;Roc Copyright</div>}
              友情链接:<Icon type="github" className='ctd-icon'/><a>github</a>
              <IconFont type="icon-facebook" className='ctd-icon'/><a>facebook</a>
              <IconFont type="icon-twitter" className='ctd-icon'/><a>twitter</a>           
      </div>
    )
  }
}


export default Bottom;