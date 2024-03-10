"use client";
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./CardPage.module.css";

const CardPage = () => {
  const cardsInfo = [
    {
      id: 1,
      title: "Card Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Card Title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Card Title 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 7,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 8,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 9,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 10,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 11,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 12,
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  const handleCardClick = (cardId) => {
    // alert(`Card ${cardId} clicked!`);
    // Implement navigation or any other action here
  };

  return (
    <Container class={styles["cards-container"]}>
      <Row xs={1} md={3} className="g-4">
        {cardsInfo.map((card) => (
          <Col key={card.id}>
            <Link href={`/hostedRoom`} passHref>
              <Card
                onClick={() => handleCardClick(card.id)}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardPage;
