import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export const Welcome = () => {
    return (
        <Jumbotron>
            <h1>Images Gallery</h1>
            <p>
                This is simple application that retrieves photos using Unsplash
                API. In orderto start enter any search term in the input field.
            </p>
            <p>
                <Button
                    variant="primary"
                    href="https://unsplash.com/"
                    target="_blank"
                >
                    Learn more
                </Button>
            </p>
        </Jumbotron>
    );
};
