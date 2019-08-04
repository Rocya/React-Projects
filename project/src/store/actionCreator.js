export default {
    changeNav(path){
        let action={
            type:'CHANGE_NAV',
            params:path
        }
        return action
    },
    changeName(name){
        let action={
            type:'CHANGE_NAME',
            params:name
        }
        return action
    },
    changeAge(age){
        let action={
            type:'CHANGE_AGE',
            params:age
        }
        return action
    },
    changeTokenState(params){
        let action={
            type:'CHANGE_TOKENSTATE',
            params:params
        }
        return action
    },
    changeBread(bread){
        let action={
            type:'CHANGE_BREAD',
            params:bread
        }
        return action
    },
}