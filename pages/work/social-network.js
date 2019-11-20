import React from "react";
import Container from "../../components/global/container";
import Head from "next/head";
import LayoutMaster from "../../components/layoutmaster";

export default () => (
    <LayoutMaster className="portfolio-item-page">
        <Container>
            <Head>
                <title>Social Network | Walid Mahade</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Social Network Project Details</h2>
            </div>

            <div className="project-features">
                <div className="feature-item">
                    <h2 className="num title--sec">9000+</h2>
                    <p className="para">Lines of code</p>
                </div>

                <div className="feature-item">
                    <h2 className="num title--sec">1.5 months</h2>
                    <p className="para">In development time</p>
                </div>
            </div>

            <div className="page-content">
                <p className="intro para text-center">
                    <b style={{textDecoration: 'underline'}}>May 2019 - Social Network Website</b> Developed a slick looking social network website's Frontend on plain HTML, CSS. I had to create and users, groups and chat pages, where everything was mobile friendly and fast. | <a
                    href="https://github.com/walidmahade/social-network" target="_blank">View On Github</a>
                    <br/>
                    <br/>
                    <span >Techstack:</span> <b>JavaScript, HTML, CSS</b>
                </p>

                <div className="cta">
                    <a href="https://mw-social-network.netlify.com/" target="_blank" className="btn btn--primary">Live Preview</a>
                    <a href="https://github.com/walidmahade/social-network" target="_blank" className="btn btn--primary">View Code</a>
                </div>

                <div className="project-images">
                    <h2 className="title--sec text-center">Project Screenshots</h2>

                    <div className="project-images-item w-50">
                        <img src="/images/portfolio/social-dropdowns.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Dropdown</h3>
                    </div>

                    <div className="project-images-item w-50">
                        <img src="/images/portfolio/social-dropdowns2.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Dropdown 2</h3>
                    </div>


                    <div className="project-images-item">
                        <img src="/images/portfolio/social-login-signup.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Login Signup</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/social-profile.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Social Profile</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/social-group.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Group Page</h3>
                    </div>


                    <div className="project-images-item">
                        <img src="/images/portfolio/social-chat.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Social Chat</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/social-preloaders.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Social Preloader</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/social-404.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">404 Page</h3>
                    </div>


                </div>
            </div>
        </Container>
    </LayoutMaster>
);
