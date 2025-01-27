import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { ImageCard } from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Welcome } from "./components/Welcome";

const UNSPLASH_API_KEY = process.env.REACT_APP_ACCESS_KEY_UNSPLASH;

const App = () => {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);

    const removeImage = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);

        fetch(
            `https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setImages([{ ...data, title: search }, ...images]))
            .catch((err) => console.error(err));

        setSearch("");
    };

    return (
        <div className="App">
            <Header title="Image Gallery!!" />
            <Search
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
            <Container className="container mt-3" fluid>
                {images.length === 0 && <Welcome />}
                <Row xs={1} md={2} lg={3} className=" justify-content-center">
                    {images &&
                        images.map((image) => (
                            <Col className=" pb-3" key={image.id}>
                                <ImageCard
                                    key={image.id}
                                    image={image}
                                    removeImage={removeImage}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default App;
