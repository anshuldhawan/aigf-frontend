import React from 'react'
import { ChatFooter } from '../Components/Chats/ChatFooter'
import { ChatMessages } from '../Components/Chats/ChatMessages'
import { SidebarChats } from '../Components/Chats/SidebarChats'
import { Navigation } from '../Layout/Navigation'

export const Chats = () => {
  return (
    <>
     <div className='main-layout d-flex flex-row h-100'>
   <Navigation/>
   <div className='profiles-home main-visible d-flex h-100'>
   <SidebarChats/>
   <ChatMessages/>
   </div>
   </div>
    </>
  )
}
