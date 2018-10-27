import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Nav from "../components/nav";

export default () => (
    <div className="App">
        <Nav />
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    </div>
);
