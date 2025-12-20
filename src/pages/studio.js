import { useState } from 'react'
import Sidebar from '@/components/studio/Sidebar'
import ChatArea from '@/components/studio/ChatArea'
import styles from '../styles/Studio.module.css'

export default function Studio() {
  const [chats, setChats] = useState([])
  const [activeChat, setActiveChat] = useState(null)

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: 'New Creative Session',
      messages: []
    }
    setChats([newChat, ...chats])
    setActiveChat(newChat.id)
  }

  const activeChatData = chats.find(c => c.id === activeChat)

  return (
    <div className={styles.studio}>
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        onNewChat={createNewChat}
      />

      <ChatArea
        chat={activeChatData}
        setChats={setChats}
        chats={chats}
      />
    </div>
  )
}
