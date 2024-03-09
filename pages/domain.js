import React from "react";
import { useRouter } from "next/router";

const DomainPage = () => {
  const router = useRouter();

  const handleCreateRoom = () => {
    // Logic to create a room or navigate to the room creation page
    console.log("Create Room button clicked");
    // For example, navigate to a route for creating a room
    router.push("/createRoom");
  };

  const handleJoinRoom = () => {
    // Logic to join a room or navigate to the room joining page
    console.log("Join Room button clicked");
    // For example, navigate to a route for joining a room
    router.push("/joinRoom");
  };

  return (
    <div className="container">
      <h1>Welcome to the Domain</h1>
      <div className="buttons">
        <button onClick={handleCreateRoom} className="create-room-btn">
          Create Room
        </button>
        <button onClick={handleJoinRoom} className="join-room-btn">
          Join Room
        </button>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 50px;
        }
        .buttons {
          margin-top: 20px;
        }
        button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
        .create-room-btn {
          background-color: #4caf50; /* Green */
          color: white;
        }
        .join-room-btn {
          background-color: #008cba; /* Blue */
          color: white;
        }
      `}</style>
    </div>
  );
};

export default DomainPage;
