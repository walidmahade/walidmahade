import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";

export default () => (
    <LayoutMaster>
        <Container>
            <Head>
                <title>Photos | Mahade Walid</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Photos</h2>
                <p className="para text-center">
                    Be a part of my journey.
                </p>
            </div>
        </Container>
    </LayoutMaster>
);
