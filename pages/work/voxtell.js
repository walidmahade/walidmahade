import React from "react";
import Container from "../../components/global/container";
import Head from "next/head";
import LayoutMaster from "../../components/layoutmaster";

export default () => (
    <LayoutMaster>
        <Container>
            <Head>
                <title>Voxtell | Walid Mahade</title>
            </Head>

            <h2 className="bold text-center">Voxtell Project</h2>
            <p className="para text-center">
                Be a part of my journey.
            </p>
        </Container>
    </LayoutMaster>
);
