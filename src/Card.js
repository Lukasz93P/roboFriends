import React, {Component} from 'react';
import MessageDiv from './smsapi/messageDiv';

class Card extends Component{

    /*editHandler=(event)=>{

        event.preventDefault();
        const name=event.target.elements.name.value;
        const id=this.props.id
        this.props.editing(id,name);
        event.target.elements.name.value="";

    }*/
    
    constructor()
    {

        super()
        this.state={

            isMessage:false

        }

    }

    goToMessageDiv=()=>this.setState({isMessage:true})

    send=()=>{

        this.props.sendMessage(this.props.number)
        this.setState({isMessage:false})
    }
    render(){
        const {setMessage}=this.props
        const {isMessage}=this.state
    return(
        <div className='card-div'>
            {!isMessage &&
                <div className="bg-light-blue dib br3 pa3 ma2  dim bw2 shadow-3">
                    <img alt="Robotos" src = {`https://robohash.org/gor${this.props.id}?200x200`}/>
                    <div className="tc">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.number}</p>
                        <button className="bg-light-purple dim grow br3" onClick={()=>
                            this.props.removing(this.props.id)}>Remove</button><br />
                        <button onClick={this.goToMessageDiv} className="bg-light-purple dim grow br3">Send message</button>
                    </div>
                </div>
            }
            {isMessage &&
                <MessageDiv setMessage={setMessage} send={this.send} />
            }        
        </div>
    );
}
}

export default Card 