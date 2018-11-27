import React from "react";
import Header from "./header";
import Footer from "./footer";
import Container from "./global/container";

export default ({ children }) => (
    <div className="App">
        <Header />
        <Container>
            <div>{children}</div>
            <Footer />
        </Container>
    </div>
);
