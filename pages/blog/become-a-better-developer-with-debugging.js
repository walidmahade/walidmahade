import React from "react";
import Container from "../../components/global/container";
import Head from "next/head";
import LayoutMaster from "../../components/layoutmaster";

export default () => (
    <LayoutMaster>
        <Container>
            <Head>
                <title>About | Mahade Walid</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Becoming a better developer: Debugging</h2>

                <div className="date text-center">May 15th, 2020</div>
            </div>
        </Container>
    </LayoutMaster>
)