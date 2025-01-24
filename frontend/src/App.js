import { Header } from "./components/Header";
import { Search } from "./components/Search";

import { useState } from "react";

const UNSPLASH_API_KEY = process.env.REACT_APP_ACCESS_KEY_UNSPLASH;

const App = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);

        fetch(
            `https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

        setSearch("");
    };

    return (
        <div className="App">
            <Header title={"Image Gallery"} />
            <Search
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default App;
