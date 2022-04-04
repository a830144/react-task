import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = ({ location }) => {
	const history = useNavigate();
    return (
        <>
            <p>Blogs </p>
            <button
                onClick={() => {
                    history(-1);
                }}
            >
                Go back
            </button>
            <p> You were redirected from {location}</p>
        </>
    );
};

export default Blogs;