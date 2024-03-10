"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import  { useRouter }  from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardPage.module.css";

export default function Page() {
  const [roomMapping, setRoomMapping] = useState([]);
  const [loginUserId, setUserId] = useState("");
  const router = useRouter();  

  useEffect(() => {
    const loginUserId = localStorage.getItem("userId");
    setUserId(loginUserId);
  }, [loginUserId]);
  

  useEffect(() => {
    const endpoint = "http://localhost:3000/api/rooms";
    fetch(endpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {        
        setRoomMapping(data.rooms);
      });
  }, []);

  const handleCardClick = async (e, cardId) => {
    // alert(`Card ${cardId} clicked!`);
    // Implement navigation or any other action here
    e.preventDefault();    
    const data = {
      userId : loginUserId
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = `/api/room/${cardId}`;
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const { updatedRoom , error} = await response.json();

    console.log(updatedRoom)


    if(!error){
      router.push(`/room/${updatedRoom.id}`);
    } else {
      console.log("Error joining room:", error);
    }
  };

  return (
    <Container className={styles["cards-container"]}>
      <Row xs={1} md={3} className="g-4">
        {roomMapping.map((room, index) => (          
            <Card              
              key={index}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {room.backgroundImageUrl && (
                <div style={{ position: "relative", borderRadius: "10px" }}>
                  <Image
                    src={room.backgroundImageUrl}
                    alt="Image"
                    className="object-cover"
                    width={500}
                    height={250}
                    priority
                  />
                </div>
              )}
              <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>
                  <span
                    style={{
                      height: "12px",
                      width: "12px",
                      backgroundColor: "green",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                      marginTop: "2px",
                    }}
                  ></span>
                  {room.members.newRoomMembers
                    ? room.members.newRoomMembers.length
                    : 0}{" "}
                  online
                </Card.Text>
                <Button className="w-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800" onClick={(e) => handleCardClick(e, room.id)} >Join</Button>

              </Card.Body>
            </Card>          
        ))}
      </Row>
    </Container>
  );
}
