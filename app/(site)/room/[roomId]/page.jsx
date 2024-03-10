"use client";

import React from "react";

const Room = () => {
  return (
    <div className="room-container">
      <header className="room-header">
        <h2>Room Name: Awesome Room</h2>
      </header>
      <main className="room-main">
        <section className="left-video-container">
        <div className="video-feed">Video feed will be here</div>
          <div className="participant">Username A</div>
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">Username B</div>
        </section>
        <section className="middle-content">
          {/* Other content in the middle */}
        </section>
        <section className="right-video-container">
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">Username D</div>
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">Username E</div>
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">Username F</div>
        </section>
        
      </main>
      <aside className="bottom-content">
        {/* Content at the bottom left */}
      </aside>

      <style jsx>{`
        .participant {
          font-size: 2vw;
          text-align: center;
        }

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

        .left-video-container,
        .right-video-container {
          flex-basis: 50%;
          padding: 2vw;
        }

        .middle-content {
          flex-basis: 50%;
          padding: 2vw;
        }

        .video-feed {
          background: #ddd;
          height: 150px; /* Adjusted height */
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }

        .bottom-content {
          padding: 10px;
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
