import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

export const ImageCard = ({ image, removeImage, handleSaveImage }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image.urls.small} />
            <Card.Body>
                <Card.Title>{image.title?.toUpperCase()}</Card.Title>
                <Card.Text>
                    {image.description || image.alt_description}
                </Card.Text>
                <Container className="d-flex justify-content-between">
                    {!image.saved && (
                        <Button
                            variant="primary"
                            onClick={() => handleSaveImage(image)}
                        >
                            Save
                        </Button>
                    )}
                    <Button
                        variant="secondary"
                        onClick={() => removeImage(image.id)}
                    >
                        Delete
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
};
