import UserMenu from './UserMenu'
import styles from '../../styles/Sidebar.module.css'

export default function Sidebar({
  chats,
  activeChat,
  setActiveChat,
  onNewChat
}) {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.newChat} onClick={onNewChat}>
        + New Chat
      </button>

      <div className={styles.history}>
        {chats.map(chat => (
          <div
            key={chat.id}
            className={`${styles.chatItem} ${
              activeChat === chat.id ? styles.active : ''
            }`}
            onClick={() => setActiveChat(chat.id)}
          >
            {chat.title}
          </div>
        ))}
      </div>

      <UserMenu />
    </aside>
  )
}
