import React from "react";
import "./header.scss";
import "./styles/global.scss";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Logo from "../static/logo.png";
import Favicon from "../static/favicon.ico";
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
                <nav className="mainMenu">
                    <Helmet>
                        <title>| Mahade Walid</title>
                        <link rel="shortcut icon" href={Favicon} />
                        <link
                            rel="stylesheet"
                            href="https://use.typekit.net/mny7oki.css"
                        />
                    </Helmet>

                    <div className="brand">
                        <Link to="/">
                            <img src={Logo} alt="Mahade Walid" />
                        </Link>
                    </div>

                    <div className="wrapper">
                        <Link
                            to="/"
                            className="navItem"
                            activeClassName="active"
                        >
                            Me
                        </Link>
                        <Link
                            to="/portfolio"
                            className="navItem"
                            activeClassName="active"
                        >
                            Code
                        </Link>
                        <Link
                            to="/objects"
                            className="navItem"
                            activeClassName="active"
                        >
                            Objects
                        </Link>
                        <Link
                            to="/photo"
                            className="navItem"
                            activeClassName="active"
                        >
                            Photo
                        </Link>
                        <Link
                            to="/video"
                            className="navItem"
                            activeClassName="active"
                        >
                            Video
                        </Link>
                        <Link
                            to="/contact"
                            className="navItem"
                            activeClassName="active"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/blog"
                            className="navItem hasDropdown"
                            activeClassName="active"
                            onMouseEnter={e => this.showDropdown(e)}
                            onMouseLeave={e => this.hideDropdown(e)}
                        >
                            Blog
                            <div
                                className="dropdown"
                                onMouseLeave={e => this.hideDropdown(e)}
                            >
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/">Life</Link>
                                <Link to="/">Lost</Link>
                            </div>
                        </Link>
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
