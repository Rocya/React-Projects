const mode ='dev'

let apiconfig={
    dev:{
        baidu:'/dev'
    },
    online:{
        baidu:'https://www.baidu.com'
    }
}
export default apiconfig[mode]