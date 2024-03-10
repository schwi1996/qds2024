"use client";

import React, { useState, useRef, useEffect } from "react";

const Room = () => {
  const [streamActive, setStreamActive] = useState(false);
  const videoRef = useRef(null);
  const mediaStream = useRef(null);

  const handleToggleCamera = () => {
    // If the stream is active, stop all tracks, otherwise start the stream
    if (streamActive && mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
      setStreamActive(false);
    } else {
      startVideoStream();
    }
  };

  const startVideoStream = async () => {
    try {
      mediaStream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream.current;
        setStreamActive(true);
      }
    } catch (error) {
      console.error("Error accessing the camera: ", error);
      setStreamActive(false);
    }
  };

  // useEffect(() => {
  //   // Start the video stream when the component mounts
  //   startVideoStream();

  //   // Stop the video stream when the component unmounts
  //   return () => {
  //     if (mediaStream.current) {
  //       mediaStream.current.getTracks().forEach((track) => track.stop());
  //     }
  //   };
  // }, []);

  return (
    <div className="room-container">
      <header className="room-header">
        <h2>Room Name: Awesome Room</h2>
      </header>
      <main className="room-main">
        <section className="left-video-container">
          <div className="video-feed">
            <video ref={videoRef} autoPlay playsInline muted></video>
          </div>
          <div
            onClick={handleToggleCamera}
            style={{
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              backgroundColor: "#007bff",
              color: "white",
            }}
          >
            <div className="material-icons" style={{ fontSize: "15px" }}>
              {streamActive ? "OFF" : "ON"}
            </div>
          </div>
          <div className="participant">Host</div>
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">Username B</div>
        </section>
        <section className="middle-content">
          <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/7BVUSyrhZ82rjA3wA0bQnB?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: "300px" }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
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
          text-align: center;
          padding: 10px; /* Add padding for spacing */
          background: #f3f3f3; /* Light grey background */
          border-radius: 10px; /* Match video-feed border radius */
          margin-bottom: 20px; /* Space between participant labels and video feeds */
        }

        .room-container {
          display: flex;
          flex-direction: column;
          height: 150vh;
        }

        .room-header {
          padding: 10px;
          background: #007bff;
          color: white;
          text-align: center;
        }

        .room-main {
          display: grid;
          grid-template-columns: 1fr 300px 1fr; /* Adjust this to suit your layout needs */
          grid-gap: 20px; /* Space between columns */
          padding: 20px;
        }

        .left-video-container,
        .right-video-container {
          flex-basis: 50%;
          padding: 2vw;
        }

        .middle-content {
          width: 300px; /* Fixed width, or you could use flex-basis if using Flexbox */
          display: flex; /* To center the iframe vertically */
          flex-direction: column;
          justify-content: center; /* Centers content vertically in the flex container */
        }

        .video-feed {
          background: #ddd;
          height: 250px; /* Adjusted height */
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
        .video-feed video {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Cover the container; may crop the video */
          /* object-fit: contain; /* Entire video will fit; no cropping, but may not fill container */
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
