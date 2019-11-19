import React from "react";
import Container from "../../components/global/container";
import Head from "next/head";
import LayoutMaster from "../../components/layoutmaster";

export default () => (
    <LayoutMaster className="portfolio-item-page">
        <Container>
            <Head>
                <title>Voxtell | Walid Mahade</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Voxtell Project Details</h2>
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

                    <div className="project-images-item">
                        <img src="/images/portfolio/realestate.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Home</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/real-estate-mapview.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Listing Map View</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/realestate-listing-page.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Listing Page</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/real-estate-search.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Real Estate Search</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/real-estate-map-fullpage.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Mapfull Page</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/realestate-calculator.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Pricing Calculator</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/realestate-forms.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Real Estate Forms</h3>
                    </div>

                    <div className="project-images-item">
                        <img src="/images/portfolio/realestate-property-slider.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Real Estate Property Slider</h3>
                    </div>

                </div>
            </div>
        </Container>
    </LayoutMaster>
);
