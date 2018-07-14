import {CHANGE_SEARCH_FIELD,MODIFY_USER, LOGIN_FAILED,LOGIN_SUCCESS,CLEAR_ERRORS} from './constants'
import axios from 'axios';

export const setSearchField=(text)=>(
    {
        type:CHANGE_SEARCH_FIELD,
        payload:text
    }
)


export const login=(userData)=>{

    return dispatch=>{ axios.post('http://localhost:3001/login', userData)
    
        .then(
            response/*user*/=>dispatch(loginSuccess(response.data))
            ,
            errors=>{
                dispatch(loginFailed(errors.response.data.errors))
            }
        )
    }
}

export const register=(userData)=>{

    return dispatch=>{axios.post('http://localhost:3001/register', userData)
    
    .then(
        response/*user*/=>dispatch(loginSuccess(response.data))
        ,
        errors=>{dispatch(loginFailed(errors.response.data.errors))
        }
    )
    }
}

export const loginSuccess=(user)=>{

    return{

        type:LOGIN_SUCCESS,
        payload:user,

    }

}

export const loginFailed=(errors)=>{

    return{

        type:LOGIN_FAILED,
        payload:errors,

    }

}

export const addNewContact=(values,user)=>{

    const {name,number,id}=values
    const newContact={name,number,id}
    const request={newContact,user}
    return dispatch=>{axios.post('http://localhost:3001/modify',request) 
    .then(
        response/*user*/=>dispatch(modifyUser(response.data))
    )
    }
}

export const modifyUser=(user)=>{

    console.log(user)

    return{

        type:MODIFY_USER,
        payload:user,

    }

}


export const removeContact=(contactId,userId)=>{

    const request={contactId,userId}
    console.log('!!!!!!!!!!',request)
    return dispatch=>{axios.put('http://localhost:3001/removecontact',request) 
    .then(
        response/*user*/=>dispatch(modifyUser(response.data))
    )
    }



}


export const clearErrors=()=>{

    return{
        type:CLEAR_ERRORS,
        payload:[]
    }

}


