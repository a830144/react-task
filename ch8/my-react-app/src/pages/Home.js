import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const history = useNavigate();

    return (
        <>
            <button
                onClick={() => history("/blogs", { from: "Home" })}
            >
                Blogs
            </button>
            <button
                onClick={() => history("/contact", { from: "Home" })}
            >
                Contact
            </button>
            <p>Welcome Home</p>
        </>
    );
};

export default Home;