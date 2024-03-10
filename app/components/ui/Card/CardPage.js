import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation"; // Ensure this import is correct
import Link from "next/link";
import Image from "next/image";
import styles from "./CardPage.module.css";

export default function Page({ searchedTitle }) {
  const [rooms, setRooms] = useState([]);
  const router = useRouter();
  

  useEffect(() => {    
    // Dynamically build the endpoint URL based on whether there's a searchedTitle
    const endpoint = searchedTitle
      ? `/api/room?title=${encodeURIComponent(searchedTitle)}`
      : "/api/rooms";
    console.log(searchedTitle);

    const fetchRooms = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setRooms(data.rooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms();
  }, [searchedTitle]); // Re-run the effect whenever searchedTitle changes

  const handleCardClick = async (e, cardId) => {
    console.log(cardId)
    e.preventDefault();
    const data = {
      userId : localStorage.getItem("userId"),
    }

    const JSONdata = JSON.stringify(data)

    const endpoint =`api/room/${cardId}`

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options);
    console.log("something response" ,response)

    const { updatedRoom, error} = await response.json();


    console.log(updatedRoom)

    if(!error){
      router.push(`/room/${cardId}`);
    }else{
      console.log("Error creating room:", error);
    }    
  };

  return (
    <Container className={styles["cards-container"]}>
      <Row xs={1} md={3} className="g-4">
        {rooms.map((room, index) => (
          <Col key={index}>
            <Card
              // onClick={() => handleCardClick(room.id)}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {room.backgroundImageUrl && (
                <div
                  className="card-img-top"
                  style={{ position: "relative", height: "180px" }}
                >
                  <Image
                    src={room.backgroundImageUrl}
                    alt="Room image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>
                  {room.description || "No description available."}
                </Card.Text>
                <Button
                  variant="primary"
                  // onClick={(e) => handleCardClick(e, room.id)}                  
                >
                <button
                  onClick={(e) => handleCardClick(e, room.id)}
                >
                  Join Room
                </button>
                  
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
