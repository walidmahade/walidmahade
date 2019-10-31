import React from "react";
import "../styles/global.scss";
import Link from 'next/link'
import NavLink from './Link'
import Head from 'next/head'
// import Favicon from "/images/favicon.ico";
import Separator from "./global/separator";

export default class Header extends React.Component {
    showDropdown = e => {
        e.target.classList.add("showDropdown");
        console.log(e.target.classList);
    };

    hideDropdown = e => {
        e.target.classList.remove("showDropdown");
        console.log(e.target.classList);

        let hasDropdown = document.querySelectorAll(".hasDropdown");

        for (var i = 0; i < hasDropdown.length; i++) {
            hasDropdown[i].classList.remove("showDropdown");
        }
    };

    render() {
        return (
            <header>
                <nav className="main-menu">
                    <Head>
                        <title>Mahade Walid | Full Stack Web Developer</title>
                        <link rel="shortcut icon" href="/images/favicon.ico" />
                        <link
                            rel="stylesheet"
                            href="https://use.typekit.net/mny7oki.css"
                        />
                    </Head>

                    <div className="brand">
                        <Link href="/">
                            {/*<img src="/images/logo.png" alt="Mahade Walid" />*/}
                            <span>Mahade Walid <small className="dot"></small></span>
                        </Link>
                    </div>

                    <div className="nav-wrapper">
                        <ul>
                            <li>
                                <NavLink href='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink href='/about'>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="mt-20 mb-35">
                    <Separator />
                </div>
            </header>
        );
    }
}

// export default Header;
