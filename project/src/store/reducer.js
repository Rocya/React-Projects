import State from './state'
export default (prevState=State,actions)=>{
    let newData = JSON.parse(JSON.stringify(prevState))
    //let newData = {...prevState}//只能用于嵌套层级为1
    let {type,params}=actions
    switch (type) {
        case 'CHANGE_NAV':
            newData.path = params
            break;
        case 'CHANGE_AGE':
            newData.age = params +3
            break;
        case 'CHANGE_NAME':
            newData.name = params
            break;
        case 'CHANGE_TOKENSTATE':
            newData.tokenState = params
            break;
        case 'CHANGE_BREAD':
            newData.bread = params
            break;

        default:
            break;
    }
    return newData
}