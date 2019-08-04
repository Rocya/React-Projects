const app = require('express')()
const bodyParser = require('body-parser')
const Jwt = require('./utils/jwt')
var jsonParser = bodyParser.json()//解析json
var urlencodedParser = bodyParser.urlencoded({ extended: false })//x-www-
app.use(urlencodedParser)
// app.use(jsonParser)
const AdminUser = require('./router/user')
const AdminChart = require('./router/chart')
app.use('/admin/chart',(req,res,next)=>{
  let {token}=req.body
  Jwt.checkToken(token)
  .then((res)=>{
    console.log('111')
    next()
  })
  .catch((err)=>{
    console.log('222')
    res.send({err:-998,msg:'token验证失败'})
  })
},AdminChart)
app.use('/admin/user',AdminUser)
app.listen(8888,()=>{
  console.log('server start')
})
