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

            <div className="page-head">
                <h2 className="bold text-center">Videos</h2>
                <p className="para text-center">
                    Coming Soon...
                </p>
            </div>
        </Container>
    </LayoutMaster>
);
