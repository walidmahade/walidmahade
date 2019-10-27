import React from "react";
import Container from "../components/global/container";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default () => (
    <div style={{ color: `inherit` }}>
        <Container>
            <Head>
                <title>About | Walid Mahade</title>
            </Head>
            <Header />
            <p>Such wow. Very React.</p>
            <Footer />
        </Container>
    </div>
);
