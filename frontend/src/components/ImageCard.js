import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

export const ImageCard = ({ image, handleDeleteImage, handleSaveImage }) => {
    const nameFormatted = image.user.name
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(" ");

    const authorPortfolioUrl = image.user.portfolio_url;

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
                    {image.saved && (
                        <Button
                            variant="secondary"
                            onClick={() => handleDeleteImage(image.id)}
                        >
                            Delete
                        </Button>
                    )}
                </Container>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
                {authorPortfolioUrl && (
                    <Button
                        variant="link"
                        href={authorPortfolioUrl}
                        target="_blank"
                    >
                        {nameFormatted}
                    </Button>
                )}
                {!authorPortfolioUrl && nameFormatted}
            </Card.Footer>
        </Card>
    );
};
