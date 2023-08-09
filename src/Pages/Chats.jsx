<<<<<<< HEAD
import React, { useState } from "react";
import { ChatFooter } from "../Components/Chats/ChatFooter";
import { ChatMessages } from "../Components/Chats/ChatMessages";
import { SidebarChats } from "../Components/Chats/SidebarChats";
import { Navigation } from "../Layout/Navigation";

export const Chats = () => {
  const [show, Setshow] = useState("");

  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible d-flex h-100">
          <SidebarChats />
          <ChatMessages />
        </div>
      </div>
    </>
  );
};
=======
import React, { useState } from 'react'
import { ChatFooter } from '../Components/Chats/ChatFooter'
import { ChatMessages } from '../Components/Chats/ChatMessages'
import { SidebarChats } from '../Components/Chats/SidebarChats'
import { Navigation } from '../Layout/Navigation'

export const Chats = () => {

  const [show, Setshow] = useState("");



  return (
    <>
      <div className='main-layout d-flex flex-row h-100'>
        <Navigation />
        <div className='profiles-home main-visible d-flex h-100'>
          <SidebarChats show={show} Setshow={Setshow} />
          <ChatMessages show={show} Setshow={Setshow} />
        </div>
      </div>
    </>
  )
}
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
