import React from 'react'
import LoginForm from './LoginForm'
import * as actions from '../actions.js';
import {connect} from 'react-redux';
import {Redirect } from 'react-router-dom'

class Login extends React.Component{

    login=(values)=>{
        
        this.props.dispatch(actions.login(values))

    }
    

    render(){

        if(this.props.isLogged)
            return( 
                <Redirect to={{pathname:"/list" }}/>
            )

        return(
            <section id='register'>
                <div className='bwm-form'>
                    <div className='row'>
                    <div className='col-md-5'>
                        <h1>Login</h1>
                        <LoginForm login={this.login} errors={this.props.errors}/>
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

export default connect(mapStateToProps)(Login)