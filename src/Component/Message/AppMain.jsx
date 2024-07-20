import React, { useState } from 'react';

const AppMain = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage(''); // Clear input field after sending
    }
  };

  return (
    <div className="app-main">
      <div className="chat-wrapper">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div className="chat-input-wrapper">
        <button className="chat-attachment-btn">
          {/* SVG attachment icon here */}
        </button>
        <div className="input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Enter your message here"
            value={message}
            onChange={handleInputChange}
          />
          <button className="emoji-btn">
            {/* SVG emoji icon here */}
          </button>
        </div>
        <button className="chat-send-btn" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AppMain;
