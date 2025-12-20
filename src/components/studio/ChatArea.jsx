import { useState, useRef, useEffect } from "react";
import styles from "../../styles/ChatArea.module.css";

export default function ChatArea({ chat, chats, setChats }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, chats, loading]);

  const sendMessage = () => {
    if (!chat || (!input.trim() && !image)) return;

    const newMsg = { role: "user", text: input, img: image || null };

    const updatedChats = chats.map((c) =>
      c.id === chat.id
        ? {
            ...c,
            messages: [...c.messages, newMsg],
          }
        : c
    );
    setChats(updatedChats);
    setInput("");
    setImage(null);

    // Simulate AI response
    setLoading(true);
    setTimeout(() => {
      const aiMsg = {
        role: "ai",
        text: "Here is a simulated AI response with neon style!",
        img: null,
      };
      setChats((prev) =>
        prev.map((c) =>
          c.id === chat.id ? { ...c, messages: [...c.messages, aiMsg] } : c
        )
      );
      setLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const removeImage = () => setImage(null);

  if (!chat) {
    return <div className={styles.empty}>Start a new creative session ✨</div>;
  }

  return (
    <div className={styles.chatArea}>
      <div className={styles.messages}>
        {chat.messages.map((msg, i) => (
          <div
            key={i}
            className={`${styles.message} ${
              msg.role === "user" ? styles.user : styles.ai
            }`}
          >
            {msg.img && (
              <div className={styles.msgImgWrapper}>
                <img src={msg.img} alt="uploaded" className={styles.msgImg} />
              </div>
            )}
            {msg.text && <span>{msg.text}</span>}
          </div>
        ))}

        {loading && (
          <div className={`${styles.message} ${styles.ai}`}>
            <span className={styles.typing}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Image preview above input */}
      {image && (
        <div className={styles.imagePreview}>
          <img src={image} alt="preview" />
          <button onClick={removeImage}>✕</button>
        </div>
      )}

      <div className={styles.inputBar}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Describe your creative challenge..."
        />
        <label className={styles.uploadBtn}>
          📎
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
