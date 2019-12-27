import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";
import emailjs from 'emailjs-com';
import Notification from '../components/notification';
// import "../styles/pages/contact.scss";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: "",
            fEmail: "",
            fSub: "",
            fMessage: "",
            formStatus: "success",
            formSubmitFeedback: "",
            showNotification: false
        }
    }


    handleChange(e, elem) {
        let val = e.target.value;

        this.setState({ [elem]: val });
    }

    resetFormStatus() {
        this.setState({
            showNotification: false,
            formStatus: "",
            formSubmitFeedback: "",
        });
    }

    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_QYj679GG_clone', e.target, 'user_YETNCiRJp5zcfWlk2Aov4')
            .then((result) => {
                this.setState({
                    fName: "",
                    fEmail: "",
                    fSub: "",
                    fMessage: "",
                    formStatus: "success",
                    formSubmitFeedback: "Thank you, You message was sent successfully.",
                    showNotification: true
                });
                console.log(result);

            }, (error) => {

                this.setState({
                    formStatus: "error",
                    formSubmitFeedback: "Sorry, something went wrong, please try again.",
                    showNotification: true
                });
                console.log(error);

            });

        setTimeout(() => this.resetFormStatus(), 3000);
    }

    render() {
        return (
            <LayoutMaster>
                <Container>
                    <Head>
                        <title>About | Mahade Walid</title>
                    </Head>

                    <div className="page-head">
                        <h2 className="bold text-center">Contact Me</h2>

                        <p className="para text-center">
                            Have an interesting project orwant to work together or just say hi, use the form below
                        </p>
                    </div>

                    <div className="form-wrap">
                        <form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
                            <div className="field-wrap">
                                <label>Name</label>
                                <input type="text" name="user_name" className="form-control" placeholder="Name"
                                    value={this.state.fName} onChange={(e) => this.handleChange(e, "fName")} required
                                />
                            </div>
                            <div className="field-wrap">
                                <label>Email</label>
                                <input type="email" name="user_email" className="form-control" placeholder="Email Address"
                                    value={this.state.fEmail} onChange={(e) => this.handleChange(e, "fEmail")} required
                                />
                            </div>
                            <div className="field-wrap">
                                <label>Subject</label>
                                <input type="text" name="subject" className="form-control" placeholder="Subject"
                                    value={this.state.fSub} onChange={(e) => this.handleChange(e, "fSub")} required
                                />
                            </div>
                            <div className="field-wrap">
                                <label>Message</label>
                                <textarea name="message" rows="10" className="form-control" placeholder="Your message"
                                    value={this.state.fMessage} onChange={(e) => this.handleChange(e, "fMessage")} required
                                />
                            </div>
                            <div className="field-wrap">
                                <input type="submit" value="Send" className="btn" />
                            </div>
                        </form>
                    </div>
                </Container>

                <Notification
                    status={this.state.formStatus}
                    message={this.state.formSubmitFeedback}
                    showNotification={this.state.showNotification}
                    resetForm={this.resetFormStatus}
                />

            </LayoutMaster>
        )
    }
}

export default Contact;

