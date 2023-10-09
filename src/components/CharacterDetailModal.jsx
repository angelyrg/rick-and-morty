import React from "react";
import { Badge, Button, Image, Modal } from "react-bootstrap";

export default function CharacterDetailModal({ character, show, handleModalClose }) {

  return (
    (
      <Modal show={show} >
        <Modal.Header>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        {/* <Image variant="top" src={"character.image"} /> */}
        <Modal.Body>
          <p className="mb-0">
            Status:{" "}
            {character.status === "Alive" ? (
              <Badge bg="success">{character.status}</Badge>
            ) : character.status === "Dead" ? (
              <Badge bg="danger">{character.status}</Badge>
            ) : (
              <Badge bg="secondary">{character.status}</Badge>
            )}
          </p>

          <p className="mb-0">Species: {character.species}</p>

          {character.type !== "" ? (
            <p className="mb-0">Type: {character.type}</p>
          ) : (
            ""
          )}

          <p className="mb-0">Origin: {"character.origin.name"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  );
}
