import React from "react";
// import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/global/container";

export default () => (
    <div className="App">
        <Header />
        <Container>
            <div style={{ color: `teal` }}>
                <p>Send us a message!</p>
            </div>
            <Footer />
        </Container>
    </div>
);
