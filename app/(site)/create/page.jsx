"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./createPage.module.css";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomPrivacy, setRoomPrivacy] = useState("public");
  const [userId, setUserId] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("div1");
  const [selectedBackgroundURL, setSelectedBackgroundURL] = useState("/composto_1.jpg");
  const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Creating room: ${roomName}, Privacy: ${roomPrivacy}`);
  //   // Implement room creation logic here
  // };

  const getBackgroundImage = (div, imageUrl) => {            
      setSelectedBackground(div);
      setSelectedBackgroundURL(imageUrl);
  }

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    setUserId(userId);
  }, [userId]);

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    const data = {
      title : roomName,
      hostUserId : userId,
      backgroundImageUrl : selectedBackgroundURL
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

    const { room, error } = await response.json();



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
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                width: "900px",
                  backgroundImage: "url('/transpish_blk.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
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
                    className={`section-divs ${selectedBackground === "div1" ? "border-solid border-4 border-grey-600" : undefined}`}
                    onClick={() => getBackgroundImage("div1","/camposto_1.jpg")}                    
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundImage: "url('/camposto_1.jpg')",
                      backgroundSize: "cover",
                      borderRadius: "8px",                          
                    }}
                  >
                    {/* BG A */}
                  </div>
                  <div
                    className={`section-divs ${selectedBackground === "div2" ? "border-solid border-4 border-grey-600" : undefined}`}
                    onClick={() => getBackgroundImage("div2","/camposto_2.jpg")}             
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundImage: "url('/camposto_2.jpg')",
                      backgroundSize: "cover",
                      borderRadius: "8px",
                    }}
                  >
                    {/* BG B */}
                  </div>
                  <div
                    className={`section-divs ${selectedBackground === "div3" ? "border-solid border-4 border-grey-600" : undefined}`}
                    onClick={() => getBackgroundImage("div3","/tower_1.png")}             
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundImage: "url('/tower_1.png')",
                      backgroundSize: "cover",
                      borderRadius: "8px",
                    }}
                  >
                    {/* BG C */}
                  </div>
                  <div
                    className={`section-divs ${selectedBackground === "div4" ? "border-solid border-4 border-grey-600" : undefined}`}
                    onClick={() => getBackgroundImage("div4","/tower_2.jpg")}             
                    style={{
                      flex: "1 0 calc(50% - 10px)",
                      margin: "5px",
                      height: "100px",
                      backgroundImage: "url('/tower_2.jpg')",
                      backgroundSize: "cover",
                      borderRadius: "8px",
                    }}
                  >
                    {/* BG D */}
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
                    backgroundColor: "#7BA6C2",
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
