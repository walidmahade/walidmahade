import React from "react";
// import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/global/container";

export default () => (
    <div className="contact">
        <Header />
        <Container>
            <div className="text-center">
                <p>Send me message!</p>
                <h3>hi@mahade.me</h3>
            </div>
            <Footer />
        </Container>
    </div>
);
