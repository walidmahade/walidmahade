import React from "react";
import Container from "../components/global/container";
import Head from "next/head";
import LayoutMaster from "../components/layoutmaster";
import FilterContent from "../components/filterContent"
// import Close from "../components/icons/close";
import { featured, js, wp } from "../components/portfolioContent";

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNav: 1
        }
    }

    handleNavToggle(activeNav) {
        this.setState({ activeNav })
    }

    render() {
        let filterData;

        if (this.state.activeNav === 1) {
            filterData = featured
        } else if (this.state.activeNav === 2) {
            filterData = js
        } else if (this.state.activeNav === 3) {
            filterData = wp
        }

        return (
            <LayoutMaster>
                <Container>
                    <Head>
                        <title>Portfolio | Walid Mahade</title>
                    </Head>

                    <div className="page-head">
                        <h2 className="bold text-center">Work I am proud of</h2>
                        <p className="para text-center">
                            Be a part of my journey.
                        </p>
                    </div>
                </Container>

                <Container>
                    <section id="filter-nav">
                        <button className={
                            this.state.activeNav === 1 ? "portfolio-nav btn active" : "portfolio-nav btn"
                        } onClick={() => this.handleNavToggle(1)}>
                            Featured
                        </button>

                        <button className={
                            this.state.activeNav === 2 ? "portfolio-nav btn active" : "portfolio-nav btn"
                        } onClick={() => this.handleNavToggle(2)}>JavaScript</button>

                        <button className={
                            this.state.activeNav === 3 ? "portfolio-nav btn active" : "portfolio-nav btn"
                        } onClick={() => this.handleNavToggle(3)}>WordPress</button>
                    </section>
                </Container>

                <Container>
                    <section id="filter-content">
                        <FilterContent data={filterData} handlePortfolioItemClick={() => this.showModal()} />
                    </section>
                </Container>
            </LayoutMaster>
        );
    }
}
