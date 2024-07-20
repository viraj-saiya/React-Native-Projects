import React, { useState } from 'react';
import logo from './logo.svg';
import  msg  from './constant';
import './App.css';
import { GiftedChat } from "react-web-gifted-chat";


import Popup from './Popup'






const App =()=> {
    const  [messages,setMessage]=useState([{msg.messages.slice().reverse()}]);

    return (
      <div className="App">
        <header className="App-header">
        
        <GiftedChat
            // user={this.chatUser}
            messages={messages}
            // onSend={(messages)=> this.onSend(messages)}
        />


        </header>
      </div>
    );
  
}

export default App;