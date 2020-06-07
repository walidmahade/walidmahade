import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";
import emailjs from 'emailjs-com';
import Notification from '../components/notification';
// import "../styles/pages/contact.scss";

class Contact extends React.Component {
    render() {
        return (
            <LayoutMaster>
                <Container>
                    <Head>
                        <title>About | Mahade Walid</title>
                    </Head>

                    <div className="page-head page-contact">
                        <h2 className="bold text-center">Get in touch!</h2>

                        <p className="para text-center">
                            Have an interesting project or
                            want to work together or just say hi.
                        </p>

                        <h3 className="text-center">
                            <a href="mailto:hi@mahade.dev" className="link">hi@mahade.dev</a>
                        </h3>
                    </div>

                </Container>
            </LayoutMaster>
        )
    }
}

export default Contact;

