"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const Room = ({ params }) => {
  const [streamActive, setStreamActive] = useState(false);
  const [roomTitle, setRoomTitle] = useState("");
  const [members, setMembers] = useState([{}]);
  const [hostId, setHostId] = useState("");
  const [hostUser, setHostUser] = useState({});
  const videoRef = useRef(null);
  const mediaStream = useRef(null);
  const router = useRouter();

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

  const handleFinishSession = async (event) => {
    event.preventDefault();
    const endpoint = `http://localhost:3000/api/room/${params.roomId}`;
    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        router.push("/join");
      });
  };

  useEffect(() => {
    const endpoint = `/api/room/${params.roomId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ room }) => {
        setRoomTitle(room.title);
        setMembers(room.members.newRoomMembers);
        setHostId(room.hostUserId);

        fetch(`/api/users/${room.hostUserId}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then(({ user }) => {
            setHostUser(user);
          });
      });
  }, []);

  return (
    <div className="room-container">
      <header className="room-header relative flex items-center justify-between">
        <div className="flex-grow text-center">
          <h2 className="">Room Name: {roomTitle}</h2>
        </div>
        <button
          onClick={handleFinishSession}
          className="focus:shadow-outline w-21 rounded-lg bg-indigo-700 p-2 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800"
        >
          Finish Session
        </button>
      </header>
      <main className="room-main">
        <section className="left-video-container">
          <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/7BVUSyrhZ82rjA3wA0bQnB?utm_source=generator&theme=0`}
            width="100%"
            height="33%"
            style={{ minHeight: "50px" }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div className="video-feed">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="video-element"
            ></video>
          </div>
          <div>
            <div className="participant">
              <div className="camera-toggle" onClick={handleToggleCamera}>
                <div className="material-icons">
                  {streamActive ? "OFF" : "ON"}
                </div>
              </div>
              Host 👑 : {hostUser.name}
            </div>
          </div>
          <div className="video-feed">Video feed will be here</div>
          {/* <div className="participant">{(!members.length || members.length > 0) ? members[0].name : "blank"}</div> */}
          <div className="participant">""</div>
        </section>
        <section className="middle-content"></section>
        <section className="right-video-container">
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">""</div>
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">""</div>
          <div className="video-feed">Video feed will be here</div>
          <div className="participant">""</div>
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

        .video-element {
          width: 100%;
          height: 100%;
          object-fit: cover; // Cover the container; may crop the video
          border-radius: 10px;
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
        .material-icons {
          text-align: center;
          content-align: center;
        }

        .video-feed {
          position: relative;
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
        .camera-toggle {
          text-align: center;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 35px; // Smaller size for a prettier look
          height: 35px;
          background-color: #007bff;
          color: white;
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
