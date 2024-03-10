"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./createPage.module.css";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomPrivacy, setRoomPrivacy] = useState("public");
  const [userId, setUserId] = useState("");
  const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Creating room: ${roomName}, Privacy: ${roomPrivacy}`);
  //   // Implement room creation logic here
  // };

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    setUserId(userId);
  }, [userId]);

  const handleCreateRoom = async (e) => {
    // Placeholder for create room logic
    e.preventDefault();
    console.log("Room created:", roomName);
    
    console.log("THIS IS USERID HEREEEEEEE" , userId)

    const data = {
      title : roomName,
      hostUserId : userId
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = `api/room`

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    console.log(response)

    const { room, error } = await response.json();
    
    console.log(room)

    if(!error){
      router.push(`/room/${room.id}`);
    }else{
      console.log("Error creating room:", error);
    }
    
  };

  

  return (
    <div className="page-container createroom">      
      <div className="container">
        <div className="main-content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div
              style={{
                width: "900px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                display: "flex",
              }}
            >

              <div style={{ display: "flex", width: "100%" }}>
              {/* Backdrop Selection Section */}
              <div
                style={{
                  flex: 1,
                  marginRight: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="label-center">Backdrop</div>
                {/* Backdrop options can be generated dynamically */}
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {/* Backdrop Item */}
                  <div
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundColor: "#D8C3A5",
                      borderRadius: "8px",
                    }}
                  >
                    BG A
                  </div>
                  <div
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundColor: "#EAE7DC",
                      borderRadius: "8px",
                    }}
                  >
                    BG B
                  </div>
                  <div
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundColor: "#E98074",
                      borderRadius: "8px",
                    }}
                  >
                    BG C
                  </div>
                  <div
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundColor: "#E85A4F",
                      borderRadius: "8px",
                    }}
                  >
                    BG D
                  </div>
                </div>
              </div>

              {/* Room Creation Form Section */}
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div className='createLabel'>Create Room</div>
                <input
                  type="text"
                  placeholder="Room Name"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  style={{
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                {/* Other inputs and options for room settings */}
                {/* ... */}
                <button
                  onClick={handleCreateRoom}
                  style={{
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "8px",
                    maxWith: "10px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                  }}
                >
                  Create Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
    </div>
  );
};

export default CreateRoom;
