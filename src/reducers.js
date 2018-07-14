import {LOGIN_FAILED,MODIFY_USER,LOGIN_SUCCESS,CHANGE_SEARCH_FIELD, CLEAR_ERRORS,} from './constants.js'

const initialStateForSearch = {
    searchField:'',
}

export const searchRobots=(state=initialStateForSearch,action={})=>{

    switch(action.type){
        case  CHANGE_SEARCH_FIELD: 
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}



const initialLoginState={

    isLogged:false,
    errors:[],
    user:{

        contacts:[]

    },
}

export const loginUser=(state=initialLoginState,action)=>{

    switch(action.type){

        case LOGIN_FAILED:
            return Object.assign({},state,{errors:action.payload})
        case LOGIN_SUCCESS:{
            return Object.assign({},state,{isLogged:true,user:action.payload})}
        case MODIFY_USER:{
            return Object.assign({},state,{user:action.payload})}
        case CLEAR_ERRORS:
            return Object.assign({},state,{errors:action.payload})
        default:
            return state    
    }
}




