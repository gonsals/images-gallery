import axios from "axios";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { ImageCard } from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";
import { Spinner } from "./components/Spinner";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5050";

const App = () => {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${API_URL}/images`);
                setImages((res.data || []).reverse());
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    const handleDeleteImage = async (id) => {
        try {
            const res = await axios.delete(`${API_URL}/images/${id}`);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setImages(images.filter((image) => image.id !== id));
        }
    };

    const handleSaveImage = async (image) => {
        image.saved = true;
        try {
            const res = await axios.post(`${API_URL}/images`, image);
            console.log(res.data);
            if (res.data?.inserted_id) {
                setImages(
                    images.map((imageInside) =>
                        imageInside.id === image.id
                            ? {
                                  ...imageInside,
                                  saved: true,
                              }
                            : imageInside
                    )
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`${API_URL}/new-image?query=${search}`);
            setImages([{ ...res.data, title: search }, ...images]);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setSearch("");
        }
    };

    return (
        <div className="App">
            <Header title="Image Gallery!!" />

            {loading && <Spinner />}

            {!loading && (
                <>
                    <Search
                        search={search}
                        setSearch={setSearch}
                        handleSubmit={handleSubmit}
                    />
                    <Container
                        className="container mt-3 position-relative"
                        fluid
                    >
                        {images.length === 0 && <Welcome />}
                        <Row
                            xs={1}
                            md={2}
                            lg={3}
                            className=" justify-content-center"
                        >
                            {images &&
                                images.reverse().map((image) => (
                                    <Col
                                        className=" pb-3 justify-content-center d-flex"
                                        key={image.id}
                                    >
                                        <ImageCard
                                            key={image.id}
                                            image={image}
                                            handleDeleteImage={
                                                handleDeleteImage
                                            }
                                            handleSaveImage={handleSaveImage}
                                        />
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                </>
            )}
        </div>
    );
};

export default App;
