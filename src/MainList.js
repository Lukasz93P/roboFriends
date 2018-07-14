import CardList from './CardList';
import SearchBox from './SearchBox';
import AddNew from './AddNew';
import Scroll from './Scroll';
import ErrorBoundry from "./ErrorBoundry";
import React from 'react'
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actions from './actions.js';
import { Route,Link } from 'react-router-dom';
const request = require('request');

class MainList extends React.Component{

    constructor(){
        super()
        this.state={

            message:'',


        }

    }

    setMessage=(event)=>{

        this.setState({message:event.target.value})

    }

    sendMessage=(number)=>{

        console.log("!>>>>>>>>>>>>>>>>>MESSAGE")
        /*request.post('https://textbelt.com/text', {
        form: {
            phone: number.toString(),
            message: this.state.message,
            key: 'textbelt',
        },
        }, null)*/
    }

    searching=(event)=>{

        this.props.dispatch(actions.setSearchField(event.target.value))

    }

    adding=(values)=>{

        values.id=this.props.user.contactsId+1
 
        this.props.dispatch(actions.addNewContact(values,this.props.user))
        this.props.history.push('/list')
    }

    removing=(contactId)=>{

        this.props.dispatch(actions.removeContact(contactId,this.props.user._id))

    }


    render(){

        const{user,errors}=this.props
        
        
        const filteredContacts=user.contacts.filter(contact =>{

            return contact.name.toLowerCase().includes(this.props.searchField.toLowerCase())

        })


        return(
            <div>
                <Route exact path='/list' render={()=>{return (
                    <div>
                        <SearchBox searching={this.searching}/>
                        <Link to='/list/add'><button className="bg-light-purple dim grow br3">Add new contact</button></Link>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList className="card-list" contacts={filteredContacts} sendMessage={this.sendMessage} setMessage={this.setMessage} removing={this.removing} editing={this.editing}/>
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                )}}/>

                <Route exact path='/list/add' render={()=><AddNew errors={errors}adding={this.adding}/>}/>
            </div>
        )

    }


}

const mapStateToProps=(state) =>{

    return{
        searchField:state.searchRobots.searchField,
        user:state.login.user,
        errors:state.login.errors,
        user:state.login.user,
    }

}

export default withRouter(connect(mapStateToProps)(MainList))