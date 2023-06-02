import React from "react";
import '../Errors/Errors.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Errors = ({ errorMessage }) => {
    if (errorMessage) {
        return (
            <div className="bad-path-container">
                <p className="error">{errorMessage}</p>
                <img className="sad-dog-img" src="https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="a dog nuzzled in a blanket" />
            </div>
        )
    }
    return (
        <div className='bad-path-container'>
            <p className='error'>Page not Found</p>
            <img className="sad-dog-img" src="https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="a dog nuzzled in a blanket" />
            <NavLink to="/">
                <button className='error-back-button'>Back To Home Page</button>
            </NavLink>
        </div>)
}

export default Errors;
