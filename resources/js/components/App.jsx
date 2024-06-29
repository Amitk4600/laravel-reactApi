import React from "react";
import Router from "../router/Index";
import { NavLink } from "react-router-dom";
const App = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <Router />
        </div>
    );
};

export default App;
