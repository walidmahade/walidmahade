import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";

export default () => (
    <LayoutMaster>
        <Container>
            <Head>
                <title>About | Walid Mahade</title>
            </Head>
            <p>Such wow. Very React.</p>
        </Container>
    </LayoutMaster>
);
