import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/global/container";
import "../styles/index.scss";

export default () => (
    <div className="App text-center">
        <Header />
        <Container>
            <section className={"me mt-35 mb-35"}>
                <img src="/images/me-spray.jpg" alt="walid_mahade" />
            </section>
            <section className="about">
                <h1>
                    Hi, I am Mahade. A self taught web developer living in
                    Bangladesh. I love developing apps, photography & playing
                    guitar.
                </h1>
            </section>

            <section className={"tech mt-35 mb-35"}>
                <h2 className={"bold"}>I am a Frontend Developer</h2>
                <div className={"small"}>
                    working with the following tech
                </div>
                <div className={"wrapper" + " mt-20 mb-35"}>
                    <div className={"item"}>
                        <img src="/images/js.png" alt="" />
                    </div>
                    <div className={"item"}>
                        <img src="/images/reactjs.png" alt="" />
                    </div>
                    <div className={"item"}>
                        <img src="/images/css3.png" alt="" />
                    </div>
                    <div className={"item"}>
                        <img src="/images/html.png" alt="" />
                    </div>
                    {/*<div className={"item"}>*/}
                    {/*    <img src="/images/nodejs.png" alt="" />*/}
                    {/*</div>*/}
                    {/*<div className={"item"}>*/}
                    {/*    <img src="/images/mongodb.png" alt="" />*/}
                    {/*</div>*/}
                </div>
                <div className={"small" + " mt-35 mb-35"}>
                    I have been working as a freelance web developer for past 3
                    years. I have also worked with Wordpress, Shopify, Laravel.
                    The main source of my freelance work is Upwork.
                </div>
            </section>

            <section className={"about" + " mt-35 mb-35"}>
                <h1>
                    Currently I am looking for a team to join where I can bring
                    value as well as grow a developer.
                </h1>
            </section>
            <section className={"moreLinks" + " mt-35 mb-35"}>
                <p>
                    See also:
                    <a href="/faq">FAQ.</a>
                    <a href="/personal-values">Personal Values.</a>
                    <a href="/blog">Articles.</a>
                    <a href="/video">Video.</a>
                </p>
            </section>

            {/* <section className={"news"}>
                <div className={"tech" + " mb-35"}>
                    <h2 className={"bold"}>Latest News</h2>
                </div>
                <ul className={"newsItem"}>
                    <li>
                        <strong>2017-10-25</strong>: Earned Fcc Front End
                        developer certificate
                    </li>
                </ul>
            </section> */}
        </Container>

        <section className=" mt-35 mb-35 pt-35">
            <div className={"tech" + " mb-35 mt-35"}>
                <h2 className={"bold"}>Testimonials</h2>
            </div>
            <div className={"testimonials" + " d-flex j-sb"}>
                <div className={"testimonial" + " mb-20"}>
                    "Mahade is a god"
                    <div className={"clientName" + " text-right"}>
                        -- Sir. Charles B.
                    </div>
                </div>
                <div className={"testimonial" + " mb-20"}>
                    Walid is experienced, punctual and has been a pleasure to
                    work with! We are hiring him for other on-going projects.
                    <div className={"clientName" + " text-right"}>
                        -- Dr. Sean Fahimi.
                    </div>
                </div>
                <div className={"testimonial" + " mb-20"}>
                    Nearly perfect qualified candidate for this position.
                    <div className={"clientName" + " text-right"}>
                        -- Belinda Tran.
                    </div>
                </div>
                <div className={"testimonial" + " mb-20"}>
                    Mahade is very knowledgeable and skilled freelancer. He
                    delivered all the tasks on time and done quality work. Will
                    definitely work with him again!!! Thanks.
                    <div className={"clientName" + " text-right"}>
                        -- Anna Rob.
                    </div>
                </div>
                <div className={"testimonial" + " mb-20"}>
                    Very responsive and completed project on time.
                    <div className={"clientName" + " text-right"}>
                        -- Robert Guinn.
                    </div>
                </div>
                <div className={"testimonial" + " mb-20"}>
                    Amazing job he did for us. I would recommend him highly.
                    <div className={"clientName" + " text-right"}>
                        -- Sheryl Stresser.
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
);
