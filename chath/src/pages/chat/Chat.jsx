import React from 'react'
import './chat.css'
import Sidebar from '../../components/sidebar/Sidebar'
import ChatList from '../../components/chatlist/ChatList'
import ChatWindow from '../../components/chatwindow/ChatWindow'

const Chat = () => {
  return (
    <div className='chatapp'>
      <Sidebar/>
      <ChatList/>
      <ChatWindow/>
    </div>
  )
}

export default Chat