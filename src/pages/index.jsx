import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container";

export default () => (
    <div className="App text-center">
        <Header />
        <Container>
            <h2>Richard Hamming on Luck</h2>
            <div>
                <p>
                    From Richard Hamming’s classic and must-read talk, “
                    <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                        You and Your
                    </a>
                    ”.
                </p>
                <p>
                    There is indeed an element of luck, and no, there isn’t. The
                    prepared mind sooner or later finds something important and
                    does it. So yes, it is luck.{" "}
                    <em>
                        The particular thing you do is luck, but that you do
                        something is not.
                    </em>
                </p>
            </div>
            <p>Posted April 09, 2011</p>
            <Footer />
        </Container>
    </div>
);
