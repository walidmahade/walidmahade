import React from "react";
import Page from "../components/layoutmaster";
import "./styles/faq.scss";

const Faq = () => (
    <section className="text-left" id="faq">
        <ol>
            <li className="faq-q">
                <h3 className="q">How old are you?</h3>
                <p className="ans"> Age clock</p>
            </li>
            <li className="faq-q">
                <h3 className="q">Why do you want to a web developer?</h3>
                <p className="ans">
                    I like hacking. Thats how I got into web development.
                </p>
            </li>
            <li className="faq-q">
                <h3 className="q">My current tech stack?</h3>
                <p className="ans">Age clock</p>
            </li>
            <li className="faq-q">
                <h3 className="q">Hobbies?</h3>
                <p className="ans">Age clock</p>
            </li>
            <li className="faq-q">
                <h3 className="q">Future plan?</h3>
                <p className="ans">Age clock</p>
            </li>
        </ol>
    </section>
);

export default () => (
    <div className="App text-center">
        <Page>
            <Faq />
        </Page>
    </div>
);

// integrate a database to save questions and have search functionality
