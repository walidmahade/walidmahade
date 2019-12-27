import React from "react";
import Container from "../../components/global/container";
import Head from "next/head";
import LayoutMaster from "../../components/layoutmaster";

export default () => (
    <LayoutMaster className="portfolio-item-page">
        <Container>
            <Head>
                <title>Price Calculator - Made by Mahade Walid</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Simple Price Calculator</h2>
            </div>

            <div className="project-features">
                <div className="feature-item">
                    <h2 className="num title--sec">418+</h2>
                    <p className="para">Lines of code</p>
                </div>

                <div className="feature-item">
                    <h2 className="num title--sec">1 Days</h2>
                    <p className="para">In development time</p>
                </div>
            </div>

            <div className="page-content">
                <div className="intro para text-center">
                    <b style={{textDecoration: 'underline'}}>October 2019</b> - Developed a simple price calculator. |
                        <a href="https://codepen.io/mahade_walid_pro/pen/poopPJK" target="_blank">View On Codepen</a>
                    <br/>
                    <br/>
                        <span>Techstack:</span> <b>Jquery, HTML, CSS</b>
                </div>

                <div className="cta">
                    <a href="https://codepen.io/mahade_walid_pro/pen/poopPJK" target="_blank" className="btn btn--primary">Live Preview</a>
                    <a href="https://codepen.io/mahade_walid_pro/pen/poopPJK" target="_blank" className="btn btn--primary">View Code</a>
                </div>

                <div className="project-images">
                    <h2 className="title--sec text-center">Project Screenshots</h2>

                    <div className="project-images-item">
                        <img src="/images/portfolio/pricing-calculator.png" className="img-responsive" alt="megamenu"/>
                        {/*<h3 className="caption bold text-center">Home</h3>*/}
                    </div>

                </div>
            </div>
        </Container>
    </LayoutMaster>
);
