import React from "react";
import LayoutMaster from "../components/layoutmaster";
import Container from "../components/global/container";
// import "../styles/pages/faq.scss";

const Faq = () => (
    <section className="text-left" id="faq">
        <div className="page-head">
            <h2 className="bold">FAQ</h2>
            <p className="para">
                Important questions answered.
            </p>
        </div>

        <ol>
            <li className="faq-q">
                <h3 className="q">How old am I?</h3>
                <p className="ans">24</p>
            </li>
            {/*<li className="faq-q">*/}
            {/*    <h3 className="q">Why do you want to be a web developer?</h3>*/}
            {/*    <p className="ans">*/}
            {/*        I like programming in general and web is the biggest platform*/}
            {/*    </p>*/}
            {/*</li>*/}
            <li className="faq-q">
                <h3 className="q">My current tech stack?</h3>
                <p className="ans">WordPress, MySQL, Javascript, Php, HTML, CSS</p>
            </li>
            <li className="faq-q">
                <h3 className="q">What do I want to learn next?</h3>
                <p className="ans">React, Vue, Firebase, NodeJs, Flutter, Marketing</p>
            </li>
            <li className="faq-q">
                <h3 className="q">What do I  learn from?</h3>
                <p className="ans">LinkedIn Learning, Laracast, FreeCodeCamp, YouTube</p>
            </li>
            <li className="faq-q">
                <h3 className="q">Hobbies?</h3>
                <p className="ans">Books, Soccer, Computer Hardware</p>
            </li>
            <li className="faq-q">
                <h3 className="q">Future plan?</h3>
                <p className="ans">Machine learning, creator, writer.</p>
            </li>
        </ol>
    </section>
);

export default () => (
    <div className="App text-center">
        <LayoutMaster className="faq-page">
            <Container>
                <Faq />
            </Container>
        </LayoutMaster>
    </div>
);