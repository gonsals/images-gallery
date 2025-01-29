import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ImageCard = ({ image, removeImage }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image.urls.small} />
            <Card.Body>
                <Card.Title>{image.title?.toUpperCase()}</Card.Title>
                <Card.Text>
                    {image.description || image.alt_description}
                </Card.Text>
                <Button onClick={() => removeImage(image.id)} variant="primary">
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};
