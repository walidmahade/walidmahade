import React from "react";
import Container from "../components/global/container";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default () => (
    <div style={{ color: `inherit` }}>
        <Container>
            <Helmet>
                <title>About | Walid Mahade</title>
            </Helmet>
            <Header />
            <p>Such wow. Very React.</p>
            <Footer />
        </Container>
    </div>
);
