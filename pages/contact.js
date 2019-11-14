import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";
import emailjs from 'emailjs-com';
// import "../styles/pages/contact.scss";

class Contact extends React.Component {
    constructor(props) {
        super(props);

    }

    sendEmail(e) {
        e.preventDefault();

        // if (condition) {

        // }

        emailjs.sendForm('gmail', 'template_QYj679GG_clone', e.target, 'user_YETNCiRJp5zcfWlk2Aov4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <LayoutMaster>
                <Container>
                    <Head>
                        <title>About | Walid Mahade</title>
                    </Head>

                    <h2 className="bold text-center">Contact Me</h2>
                    <p className="para text-center">
                        Have an interesting project orwant to work together or just say hi, use the form below
                    </p>

                    <div className="form-wrap">
                        <form className="contact-form" onSubmit={this.sendEmail}>
                            {/* <input type="hidden" name="contact_number" /> */}
                            <div className="field-wrap">
                                <label>Name</label>
                                <input type="text" name="user_name" className="form-control" placeholder="Name" required />
                            </div>
                            <div className="field-wrap">
                                <label>Email</label>
                                <input type="email" name="user_email" className="form-control" placeholder="Email Address" required />
                            </div>
                            <div className="field-wrap">
                                <label>Subject</label>
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="field-wrap">
                                <label>Message</label>
                                <textarea name="message" rows="10" className="form-control" placeholder="Your message" required />
                            </div>
                            <div className="field-wrap">
                                <input type="submit" value="Send" className="btn" />
                            </div>
                        </form>
                    </div>
                </Container>
            </LayoutMaster>
        )
    }
}

export default Contact;

