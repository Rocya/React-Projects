const express =require('express')
const Router = express.Router()

Router.post('/breakfast',(req,res)=>{
  let  result = {
    err: 0,
    msg: 'ok',
    data: {
      name: '早餐食品统计',
      list: [{
          value: 500,
          name: '烤冷面'
        },
        {
          value: 50,
          name: '手抓饼'
        },
        {
          value: 90,
          name: '鸡蛋灌饼'
        },
        {
          value: 150,
          name: '豆浆油条'
        },
        {
          value: 25,
          name: '豆腐脑(甜)'
        },
        {
          value: 280,
          name: '豆腐脑(咸)'
        },
        {
          value: 280,
          name: '煎饼果子'
        },
        {
          value: 280,
          name: '大饼卷一切'
        }
      ]
    }
  
  
  }
  res.send(result)
})
module.exports=Router