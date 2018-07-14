import React from 'react'
import RegisterForm  from './RegisterForm';
import * as actions from '../actions.js';
import {Redirect } from 'react-router-dom'
import {connect} from 'react-redux';


export class Register extends React.Component{



    registerUser=(values)=>{

        this.props.dispatch(actions.register(values))

    }

    componentWillMount=()=>{

        this.props.dispatch(actions.clearErrors())

    }

    render(){
        const {errors,isLogged}=this.props
        if(isLogged)
            return <Redirect to={{pathname:"/list" }}/>
        return(

            <section id='register'>
                <div className='bwm-form'>
                    <div className='row'>
                    <div className='col-md-5'>
                        <h1>Register</h1>
                        <RegisterForm errors={errors} registerUser={this.registerUser}/>
                    </div>
                    <div className='col-md-6 ml-auto'>
                        <div className='image-container'>
                        <img src='' alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        )

    }

}

function mapStateToProps(state){
    const {isLogged,errors}=state.login
    return {
        isLogged,
        errors,
    }
}

export default connect(mapStateToProps)(Register)