import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container";
import Me from "../static/me-bw.jpeg";
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

            <section className={styles.tech}>
                <div className={styles.bold}>I am an UI Developer</div>
                <div className={styles.small}>
                    working with the following tech
                </div>
                <div className={styles.wrapper}>
                    <div className="item">
                        <img src="" alt="" />
                    </div>
                    <div className="item">
                        <img src="" alt="" />
                    </div>
                    <div className="item">
                        <img src="" alt="" />
                    </div>
                    <div className="item">
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
            <Footer />
        </Container>
    </div>
);
