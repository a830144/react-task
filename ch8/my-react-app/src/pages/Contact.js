import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({ location }) => {
	const history = useNavigate();
    return (
        <>
            <p>Contact Page</p>
            <button
                onClick={() => {
                    history(-1);
                }}
            >
                Go back
            </button>
            <p>You were redirected from {location}</p>
        </>
    );
};

export default Contact;