import React, { useState } from "react";
import { useRouter } from "next/router";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomPrivacy, setRoomPrivacy] = useState("public");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to create a room with the specified settings
    // This could involve an API call to your backend server
    console.log(`Creating room: ${roomName}, Privacy: ${roomPrivacy}`);

    // After room creation, you might navigate to the room or to a success page
    // Replace '/room/[id]' with your actual route for the created room
    // router.push(`/room/${createdRoomId}`);
  };

  return (
    <div className="container">
      <h1>Create a Room</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="roomName">Room Name:</label>
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomPrivacy">Room Privacy:</label>
          <select
            id="roomPrivacy"
            value={roomPrivacy}
            onChange={(e) => setRoomPrivacy(e.target.value)}
            required
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" className="create-btn">
          Create Room
        </button>
      </form>
      {/* ...styles... */}
    </div>
  );
};

export default CreateRoom;
