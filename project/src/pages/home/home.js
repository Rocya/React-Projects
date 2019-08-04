import React,{Component,Fragment} from 'react';
import { Calendar,Card,Carousel,Icon } from 'antd';
import './home.less'
import img1 from  '../../common/img/img1.jpg'
import img2 from  '../../common/img/img2.png'
import img3 from  '../../common/img/img3.jpg'
import img4 from  '../../common/img/img4.png'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class Home extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    
  }
  next() {
      this.slider.slick.slickNext();
  }
  prev() {
      this.slider.slick.slickPrev();
  }

  render(){ 
    const lunboSetting = {
      dots: true,
      lazyLoad: true,
      autoplay:true,
    }
    let name=localStorage.getItem('name')
    return(
      <Fragment>
        <div className='admin-left'>
        <Card className='h1-content'>
          <h1>╰︶﹉⋛⋋⊱⋋๑<span style={{color:'orange'}}>{name?'欢迎您!'+' '+name:'请登录!'}</span>๑⋌⊰⋌⋚﹉︶╯</h1>
        </Card>
        <Card className='banner-content' title='Banner'>
          <Icon type="left-circle" onClick={this.prev} className='left-button button'/>
          <Icon type="right-circle" onClick={this.next} className='right-button button'/>
          <Carousel {...lunboSetting}  ref={el => (this.slider = el)} dotPosition='bottom' >
          <img src={img1} className='img-content'/>
          <img src={img2} className='img-content'/>
          <img src={img3} className='img-content'/>
          <img src={img4} className='img-content'/>
          </Carousel>        
        </Card>
        </div>
        <Card className='data-content' title='日期'>
          <div >
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} className='data-subcont'/>
          </div>
        </Card>
      </Fragment>
    )
  }
}
  

export default Home;