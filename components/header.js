import React from "react";
import "../styles/main.scss";
import Link from 'next/link';
import NavLink from './Link';
import Head from 'next/head';
import Logo from "./icons/logo";
// import Favicon from "/images/favicon.ico";
// import Separator from "./global/separator";

export default class Header extends React.Component {
    state = {
        isTop: true
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;

            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }

    render() {
        return (
            <header id="site-header" className={this.state.isTop ? "not-sticky" : "active"}>
                <nav className="main-menu">
                    <Head>
                        <title>Mahade Walid | Full Stack Web Developer</title>
                        <link rel="shortcut icon" href="/images/favicon.png" />
                    </Head>

                    <div className="brand">
                        <Link href="/">
                            <h1 className={"wrap"}>
                                <Logo />
                                <span>Mahade Walid <small className="dot" /></span>
                            </h1>
                        </Link>
                    </div>

                    <div className="nav-wrapper">
                        <ul>
                            <li>
                                <NavLink href='/about'>Me</NavLink>
                            </li>
                            <li>
                                <NavLink href='/portfolio'>Portfolio</NavLink>
                            </li>
                            {/*<li>*/}
                            {/*    <NavLink href='/blog'>Blog</NavLink>*/}
                            {/*</li>*/}
                            <li>
                                <NavLink href='/contact'>Contact</NavLink>
                            </li>
                            {/* <li className="icon">
                                <a href="https://ko-fi.com/mahade" target="_blank" className="nav-item">
                                    <img src="/images/coffee-cup.png" height="25px" />
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

// export default Header;
