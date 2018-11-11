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

export default () => (
    <div className="App text-center">
        <Header />
        <Container>
            <section className={styles.me}>
                <img src={Me} alt="walid_mahade" />
            </section>
            <section className={styles.about}>
                <h1>
                    Hi, I am Mahade. A self taught web developer living in
                    Bangladesh. I love developing apps, photography & playing
                    guitar.
                </h1>
            </section>

            <section className={styles.tech + " mt-20"}>
                <div className={styles.bold}>I am an UI Developer</div>
                <div className={styles.small}>
                    working with the following tech
                </div>
                <div className={styles.wrapper}>
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
                <div className={styles.small}>
                    I have been working as a freelance web developer for past 3
                    years. I have also worked with Wordpress, Shopify, Laravel.
                    The main source of my freelance work is Upwork.
                </div>
            </section>
            <Footer />
        </Container>
    </div>
);
