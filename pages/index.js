import React from "react";
import LayoutMaster from "../components/layoutmaster";
import Container from "../components/global/container";
// import "../styles/pages/index.scss";
import Link from "next/link";

export default () => (
    <LayoutMaster className="text-center">
        <Container>
            <section className="about">
                <div className="left">
                    <h2 className="title">Hi, I am Mahade.</h2>
                    <p className="para">
                        I build websites & make youtube videos about JavaScript, NodeJs & web development.
                    </p>

                    <section className={"moreLinks" + " mt-35 mb-35"}>
                        <p>
                            See also:
                            <Link href={"/portfolio"}><a>Work.</a></Link>
                            <Link href={"/personal-values"}><a>Personal Values.</a></Link>
                            <Link href={"/blog"}><a>Articles.</a></Link>
                            <Link href={"/video"}><a>Videos.</a></Link>
                        </p>
                    </section>
                </div>

                <div className="right">
                    <img src="/images/walid.jpeg" alt="walid_mahade" />
                </div>
            </section>
        </Container>

        <section className=" mt-35 mb-35 pt-35">
            <Container>
                <div className={"tech" + " mb-35 mt-35"}>
                    <h2 className={"bold"}>Other People's Opinions</h2>
                </div>
                <div className={"testimonials" + " d-flex j-sb"}>
                    <div className={"testimonial" + " mb-20"}>
                        "We have worked together in a few jobs now, and will collaborate again in the future! He's my "secret weapon" to getting websites done fast!!! Thanks Walid! "
                        <div className={"clientName" + " text-right"}>
                            -- Matt Ward.
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
                    <div className={"testimonial" + " mb-20"}>
                        Mahade is very knowledgeable and skilled freelancer. He
                        delivered all the tasks on time and done quality work. Will
                        definitely work with him again!!! Thanks.
                        <div className={"clientName" + " text-right"}>
                            -- Anna Rob.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </LayoutMaster>
);
