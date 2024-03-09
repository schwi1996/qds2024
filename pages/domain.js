import React from "react";
import { useRouter } from "next/router";
import Header from "../app/components/ui/header";
import Footer from "../app/components/ui/footer";

const DomainPage = () => {
  const router = useRouter();

  const handleCreateRoom = () => {
    console.log("Create Room button clicked");
    router.push("/createRoom");
  };

  const handleJoinRoom = () => {
    console.log("Join Room button clicked");
    router.push("/joinRoom");
  };

  return (
    <div className="page-container">
      <Header />
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
      </div>
      <Footer />

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .container {
          text-align: center;
          padding: 50px;
          flex-grow: 1;
        }
        .buttons {
          margin-top: 20px;
        }
        button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s, transform 0.2s;
        }
        .create-room-btn {
          background-color: #4caf50; /* Green */
          color: white;
        }
        .join-room-btn {
          background-color: #008cba; /* Blue */
          color: white;
        }
        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
export default DomainPage;
