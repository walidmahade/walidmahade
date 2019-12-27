import React from "react";
import Container from "../../components/global/container";
import Head from "next/head";
import LayoutMaster from "../../components/layoutmaster";

export default () => (
    <LayoutMaster className="portfolio-item-page">
        <Container>
            <Head>
                <title>Voxtell | Wordpress Developer | Mahade Walid</title>
            </Head>

            <div className="page-head">
                <h2 className="bold text-center">Voxtell Project Details</h2>
            </div>

            <div className="project-features">
                <div className="feature-item">
                    <h2 className="num title--sec">96000+</h2>
                    <p className="para">Lines of code</p>
                </div>

                <div className="feature-item">
                    <h2 className="num title--sec">2 months</h2>
                    <p className="para">In development time</p>
                </div>
            </div>

            <div className="page-content">
                <p className="intro para text-center">
                    <b style={{textDecoration: 'underline'}}>October 2019 - Gutenberg ReactJs blocks:</b> Developed 34 pages from design in html css. Then converted them to ReactJs re-usable blocks for WordPress Gutenberg editor. Also used rest api to fetch products & blog posts and implemented search, filter functionality | <a
                    href="https://github.com/walidmahade/voxtell-gutenberg-block" target="_blank">View On Github</a>
                    <br/>
                    <br/>
                    <b>Techstack:</b> <span>Rest API, JavaScript, PHP, WordPress, HTML, CSS</span>
                </p>
                
                <div className="cta">
                    <a href="https://mw-voxtell.netlify.com/home" target="_blank" className="btn btn--primary">Live Preview</a>
                    <a href="https://github.com/walidmahade/voxtell-gutenberg-block" target="_blank" className="btn btn--primary">View Code</a>
                </div>
                
                <div className="project-images">
                    <h2 className="title--sec text-center">Project Screenshots</h2>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-megamenu.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Megamenu</h3>
                    </div>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-login.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Login Page</h3>
                    </div>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-faq.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Accordions</h3>
                    </div>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-custom-product-filters.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Filters</h3>
                    </div>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-blog.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Blog</h3>
                    </div>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-blog-single.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Blog Inner</h3>
                    </div>

                    <div className="project-images-item ">
                        <img src="/images/portfolio/voxtell-404.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">404 page</h3>
                    </div>

                    <div className="project-images-item w-50">
                        <img src="/images/portfolio/voxtell-forms.png" className="img-responsive" alt="megamenu"/>
                        <h3 className="caption bold text-center">Custom Forms</h3>
                    </div>


                </div>
            </div>
        </Container>
    </LayoutMaster>
);
