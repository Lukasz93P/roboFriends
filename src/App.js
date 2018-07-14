import React, {Component} from 'react';

import {connect} from 'react-redux';
import Login from './login/Login';
import Register from './register/Register';
import { Route,Redirect } from 'react-router-dom';
import {withRouter} from 'react-router';
import MainList from './MainList'



const mapStateToProps=(state) =>{

    return{
        isLogged:state.login.isLogged,
    }

}


class App extends Component{
    

    render(){

        const {isLogged}=this.props
        return( 
            
            <div className="tc"> 
                <h1>Robo Friends</h1>
                {!isLogged &&

                    <Redirect to={{pathname:"/login" }}/>
                }               
                <div>
                    <Route path='/list' component={MainList}/>
                </div>
                <div>
                    <Route exact path='/login' component={Login}/>
                </div>

                <div>
                   <Route exact path='/register' component={Register}/>
                </div>
                
                
                
            </div>
            )
    }

}

export default withRouter(connect(mapStateToProps)(App))