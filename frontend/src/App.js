import axios from "axios";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { ImageCard } from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";
import { Spinner } from "./components/Spinner";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5050";

const App = () => {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const showToast = (message, type = "success") => {
        toast[type](message, {
            position: "bottom-right",
            hideProgressBar: false,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    };

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${API_URL}/images`);
                setImages(res.data || []);
            } catch (error) {
                console.error(error);
                showToast(error.message, "error");
            } finally {
                setLoading(false);
                showToast("Saved image downloaded", "success");
            }
        };
        fetchImages();
    }, []);

    const handleDeleteImage = async (id) => {
        const image = images.find((image) => image.id === id);
        try {
            const res = await axios.delete(`${API_URL}/images/${id}`);
            // Verificar que la eliminación fue exitosa antes de actualizar el estado
            if (res.status === 200) {
                setImages((prevImages) =>
                    prevImages.filter((image) => image.id !== id)
                );
                showToast(`Image ${image.title} was deleted`, "warning");
            } else {
                showToast("Failed to delete image from database", "error");
            }
        } catch (error) {
            console.error(error);
            showToast(error.message, "error");
        }
    };

    const handleSaveImage = async (image) => {
        image.saved = true;
        try {
            const res = await axios.post(`${API_URL}/images`, image);
            if (res.data?.inserted_id) {
                setImages((prevImages) =>
                    prevImages.map((imageInside) =>
                        imageInside.id === image.id
                            ? { ...imageInside, saved: true }
                            : imageInside
                    )
                );
                showToast(`Image ${image.title} was saved`, "info");
            }
        } catch (error) {
            console.error(error);
            showToast(error.message, "error");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`${API_URL}/new-image?query=${search}`);
            setImages((prevImages) => [
                { ...res.data, title: search },
                ...prevImages,
            ]);
            showToast(`New image ${search.toUpperCase()} was found`, "info");
        } catch (error) {
            console.error(error);
            showToast(error.message, "error");
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
                            className="justify-content-center"
                        >
                            {images.map((image) => (
                                <Col
                                    className="pb-3 justify-content-center d-flex"
                                    key={image.id}
                                >
                                    <ImageCard
                                        image={image}
                                        handleDeleteImage={handleDeleteImage}
                                        handleSaveImage={handleSaveImage}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </>
            )}
            <ToastContainer />
        </div>
    );
};

export default App;
