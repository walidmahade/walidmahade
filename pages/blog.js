import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";

export default () => (
    <LayoutMaster>
        <Container>
            <Head>
                <title>About | Mahade Walid</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Blog</h2>

                <p className="para text-center">
                    Be a part of my journey.
                </p>
            </div>

            <section id="blog-grid">
                <div className="categories-filter">
                    <button className="btn category-nav"> All </button>
                    <button className="btn category-nav"> JS </button>
                    <button className="btn category-nav"> HTML/CSS </button>
                    <button className="btn category-nav"> WP </button>
                    <button className="btn category-nav"> Tools </button>
                    <button className="btn category-nav"> Journal </button>
                </div>

                <div className="blog-search">
                    <input type="search" className="form-control" placeholder="Type to search" />
                </div>

                <div className="blog-post-items">
                    <div className="bp-item">
                        <div className="img">
                            <img src="images/posts/cookies.jpg" alt="cookies" />
                        </div>
                        <div className="title">Becoming a better developer: Debugging</div>
                        <div className="date">May 15th, 2020</div>
                    </div>

                    <div className="bp-item">
                        <div className="img">
                            <img src="images/posts/cookies.jpg" alt="cookies" />
                        </div>
                        <div className="title">Full Stack Authentication: Cookies and Local Storage</div>
                        <div className="date">October 29th, 2019</div>
                    </div>

                    <div className="bp-item">
                        <div className="img">
                            <img src="images/posts/cookies.jpg" alt="cookies" />
                        </div>
                        <div className="title">Full Stack Authentication: Cookies and Local Storage</div>
                        <div className="date">October 29th, 2019</div>
                    </div>
                </div>
            </section>

        </Container>
    </LayoutMaster>
);
