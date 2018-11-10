import React from "react";
import Header from "../components/header";
import { Helmet } from "react-helmet";

export default () => (
    <div style={{ color: `inherit` }}>
        <Helmet>
            <title>About | Walid Mahade</title>
        </Helmet>
        <Header />
        <p>Such wow. Very React.</p>
    </div>
);
