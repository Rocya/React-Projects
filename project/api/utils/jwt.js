const jwt=require('jsonwebtoken')
const scrict='sdjfksdjflajflasjflasjflksf'

function creatToken(data={},exp=15*1000){
    // 产生token
    let palyload ={}
    palyload.data=data
    // palyload.ctime=Date.now()//创建时间
    // palyload.exp=exp||1000*60*24*7
    return jwt.sign(palyload,scrict,{expiresIn:exp})
}

function checkToken(token='123'){
    return  new Promise((resovle,reject)=>{
        jwt.verify(token,scrict,(err,data)=>{
          console.log(err,data)
           if(err){ 
             console.log(444)
              reject('token 验证失败')
            }
           else{
             console.log(222)
             resovle(data)

           }
           })
    })
    
}
module.exports={
    creatToken,checkToken
}