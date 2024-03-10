"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardPage.module.css";

export default function Page() {
  const [roomMapping, setRoomMapping] = useState([]);

  useEffect(() => {
    const endpoint = "http://localhost:3000/api/rooms";
    fetch(endpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRoomMapping(data.rooms);
      });
  }, []);

  const handleCardClick = (cardId) => {
    // alert(`Card ${cardId} clicked!`);
    // Implement navigation or any other action here
  };

  return (
    <Container className={styles["cards-container"]}>
      <Row xs={1} md={3} className="g-4">
        {roomMapping.map((room, index) => (
          <Link href={`/room/${room.id}}`} key={index}>
            <Card
              onClick={() => handleCardClick(room.id)}
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
                <Button className="w-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Join</Button>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
