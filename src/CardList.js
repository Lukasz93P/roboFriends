import React from 'react';
import Card from "./Card";

const CardList=({contacts,removing,setMessage,sendMessage})=>{

    const cardList=contacts.map((contact, index) => {
        return  <Card name={contact.name} sendMessage={sendMessage} setMessage={setMessage} number={contact.number} key={index} id={contact.id} removing={removing}/>
    })

    return(
        <div>
            {cardList}
        </div>
    )


}

export default CardList