import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export const Search = ({ handleSubmit, search, setSearch }) => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col xs={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Search for new image..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
