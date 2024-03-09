import React from "react";

const Room = () => {
  return (
    <div className="room-container">
      <header className="room-header">
        <h2>Room Name: Awesome Room</h2>
      </header>
      <main className="room-main">
        <section className="video-container">
          <h3>Live Video Feed</h3>
          {/* Placeholder for video feed */}
          <div className="video-feed">Video feed will be here</div>
        </section>
        <aside className="sidebar">
          <section className="participant-list">
            <h3>Participants</h3>
            <ul>
              <li>Participant 1</li>
              <li>Participant 2</li>
              {/* List of participants */}
            </ul>
          </section>
          <section className="chat">
            <h3>Chat</h3>
            <div className="chat-messages">
              {/* Chat messages */}
              <p>Message 1</p>
              <p>Message 2</p>
            </div>
            <form className="chat-form">
              <input type="text" placeholder="Type a message..." />
              <button type="submit">Send</button>
            </form>
          </section>
        </aside>
      </main>

      <style jsx>{`
        .room-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .room-header {
          padding: 10px;
          background: #007bff;
          color: white;
          text-align: center;
        }

        .room-main {
          display: flex;
          flex: 1;
        }

        .video-container {
          flex-grow: 1;
          padding: 20px;
        }

        .video-feed {
          background: #ddd;
          height: 300px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sidebar {
          width: 300px;
          border-left: 1px solid #ccc;
          display: flex;
          flex-direction: column;
        }

        .participant-list ul {
          list-style: none;
          padding: 0;
        }

        .chat {
          flex-grow: 1;
        }

        .chat-messages {
          height: 200px;
          overflow-y: auto;
          background: #f7f7f7;
          padding: 10px;
        }

        .chat-form {
          display: flex;
          padding: 10px;
        }

        .chat-form input {
          flex-grow: 1;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Room;
