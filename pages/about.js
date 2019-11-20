import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";
import DividerLeft from "../components/dividers/divider-left";

export default () => (
    <LayoutMaster className={"about-page"}>
        <Container>
            <Head>
                <title>About | Walid Mahade</title>
            </Head>

            <div className="page-head">
                <h2 className="bold">Me</h2>
                <p className="para">
                    A <b>full-stack web developer</b> working with <b>JavaScript & PHP</b>,
                    looking for new opportunities as a <b>React/Vue/JavaScript/PHP/Laravel</b> developer.
                </p>
            </div>

            <div className="resume">
                <ol>
                    <li>
                        <p className="lt">Contact information</p>
                        <ul>
                            <li>Mahade Hasan Khan Walid</li>
                            <li>hi@mahade.dev</li>
                            <li>+8801994961651</li>
                            <li>Languages:
                                <ul>
                                    <li>English(Excellent - written and spoken)</li>
                                    <li>Bangali(native)</li></ul>
                            </li>
                            <li><a href="https://codepen.io/mahade_walid_pro" target="_blank">CodePen</a></li>
                            <li><a href="https://github.com/walidmahade" target="_blank">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/mahade-walid-b9556b183/" target="_blank">Linkedin</a></li>
                        </ul>
                    </li>

                    <DividerLeft />

                    <li>
                        <p className="lt">Core Values</p>
                        <ul>
                            <li>Simple</li>
                            <li>Hard working</li>
                            <li>Always thinking</li>
                            <li>Inner Peace</li>
                            <li>😌😌😌</li>
                        </ul>
                    </li>

                    <DividerLeft />

                    <li>
                        <p className="lt">Education</p>
                        <ul>
                            <li>2014-2016: Uni, Bachelors in Physics(Dropped out)</li>
                            <li>2012-2014: College, Higher Secondary Certificate.</li>
                            <li>2010-2012: School, Secondary School Certificate.</li>
                            {/*add certificate testimonials images on hover*/}
                        </ul>
                    </li>

                    <DividerLeft />

                    <li>
                        <p className="lt">Experience</p>
                        <ul>
                            <li>
                                <b style={{textDecoration: 'underline'}}>October 2019 - Gutenberg ReactJs blocks:</b> Developed 34 pages from design in html css. Then converted them to ReactJs re-usable blocks for WordPress Gutenberg editor. Also used rest api to fetch products & blog posts and implemented search, filter functionality | <a
                                href="https://github.com/walidmahade/voxtell-gutenberg-block" target="_blank">View On Github</a>
                                <br/>
                                <br/>
                                <b>Time Span:</b> <span>2 months</span>
                                <br />
                                <b>Techstack:</b> <span>Rest API, JavaScript, PHP, WordPress, HTML, CSS</span>
                            </li>
                            <br/>
                            <li>
                                <b style={{textDecoration: 'underline'}}>June 2019 - Real Estate Website</b> Developed a slick looking Real Estate website's Frontend on plain HTML, CSS. I had to add custom google maps listing, implement related search UI | <a
                                href="https://github.com/walidmahade/social-network" target="_blank">View On Github</a>
                                <br/>
                                <br/>
                                <b>Time Span:</b> <span>1.5 months</span>
                                <br/>
                                <span >Techstack:</span> <b>JavaScript, Google Maps, HTML, CSS</b>
                            </li>
                            <br/>
                            <li>
                                <b style={{textDecoration: 'underline'}}>May 2019 - Social Network Website</b> Developed a slick looking social network website's Frontend on plain HTML, CSS. I had to create and users, groups and chat pages, where everything was mobile friendly and fast. | <a
                                href="https://github.com/walidmahade/social-network" target="_blank">View On Github</a>
                                <br/>
                                <br/>
                                <b>Time Span:</b> <span>1.5 months</span>
                                <br/>
                                <span >Techstack:</span> <b>JavaScript, HTML, CSS</b>
                            </li>
                        </ul>
                    </li>

                    <DividerLeft />

                    <li>
                        <p className="lt">Skills</p>

                        <ul>
                            <li>JavaScript/TypeScript(Above Average)</li>
                            <li>PHP(proficient)</li>
                            <li>HTML/CSS(Above Average)</li>
                            <li>WordPress(proficient)</li>
                            <li>Laravel(Working Knowledge)</li>
                            <li>Version control/GIT(proficient)</li>
                        </ul>
                    </li>

                    {/*<DividerLeft />*/}

                </ol>
            </div>
        </Container>
    </LayoutMaster>
);
