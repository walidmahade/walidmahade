import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/global/container";
import Me from "../static/me-bw.jpeg";
import jslogo from "../static/js.png";
import nodelogo from "../static/nodejs.png";
import mongo from "../static/mongodb.png";
import reactLogo from "../static/reactjs.png";
import styles from "./styles/index.module.scss";
// import Separator from "../components/global/separator";

export default () => (
    <div className="App text-center">
        <Header />
        <Container>
            <section className={styles.me + " mt-35 mb-35"}>
                <img src={Me} alt="walid_mahade" />
            </section>
            <section className={styles.about}>
                <h1>
                    Hi, I am Mahade. A self taught web developer living in
                    Bangladesh. I love developing apps, photography & playing
                    guitar.
                </h1>
            </section>

            <section className={styles.tech + " mt-35 mb-35"}>
                <div className={styles.bold}>I am an UI Developer</div>
                <div className={styles.small}>
                    working with the following tech
                </div>
                <div className={styles.wrapper + " mt-20 mb-35"}>
                    <div className={styles.item}>
                        <img src={jslogo} alt="" />
                    </div>
                    <div className={styles.item}>
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className={styles.item}>
                        <img src={nodelogo} alt="" />
                    </div>
                    <div className={styles.item}>
                        <img src={mongo} alt="" />
                    </div>
                </div>
                <div className={styles.small + " mt-35 mb-35"}>
                    I have been working as a freelance web developer for past 3
                    years. I have also worked with Wordpress, Shopify, Laravel.
                    The main source of my freelance work is Upwork.
                </div>
            </section>

            <section className={styles.about + " mt-35 mb-35"}>
                <h1>
                    Currently I am looking for a team to join where I can bring
                    value as well as grow a developer.
                </h1>
            </section>
        </Container>

        <section className=" mt-35 mb-35">
            <div className={styles.tech + " mb-35"}>
                <div className={styles.bold}>Testimonials</div>
            </div>
            <div className={styles.testimonials + " d-flex j-sb"}>
                <div className={styles.testimonial + " mb-20"}>
                    Walid is experienced, punctual and has been a pleasure to
                    work with! We are hiring him for other on-going projects.
                    <div className={styles.clientName + " text-right"}>
                        -- Dr. Sean Fahimi.
                    </div>
                </div>
                <div className={styles.testimonial + " mb-20"}>
                    <p>Nearly perfect qualified candidate for this position.</p>
                    <div className={styles.clientName + " text-right"}>
                        -- Belinda Tran.
                    </div>
                </div>
                <div className={styles.testimonial + " mb-20"}>
                    Mahade is very knowledgeable and skilled freelancer. He
                    delivered all the tasks on time and done quality work. Will
                    definitely work with him again!!! Thanks.
                    <div className={styles.clientName + " text-right"}>
                        -- Anna Rob.
                    </div>
                </div>
                <div className={styles.testimonial + " mb-20"}>
                    Quick and great work.
                    <div className={styles.clientName + " text-right"}>
                        -- Dan Candell.
                    </div>
                </div>
                <div className={styles.testimonial + " mb-20"}>
                    Very responsive and completed project on time.
                    <div className={styles.clientName + " text-right"}>
                        -- Robert Guinn.
                    </div>
                </div>
                <div className={styles.testimonial + " mb-20"}>
                    Amazing job he did for us. I would recommend him highly.
                    <div className={styles.clientName + " text-right"}>
                        -- Sheryl Stresser.
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
);
