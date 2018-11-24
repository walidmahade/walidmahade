import React from "react";
import navStyles from "./header.module.scss";
import "./styles/global.scss";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Logo from "../static/logo.png";
import Favicon from "../static/favicon.ico";
import Separator from "./global/separator";

export default () => (
    <header>
        <nav className={navStyles.mainMenu}>
            <Helmet>
                {/* <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400|PT+Sans:700|PT+Serif"
                    rel="stylesheet"
                /> */}
                <title>| Mahade Walid</title>
                <link rel="shortcut icon" href={Favicon} />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/mny7oki.css"
                />
            </Helmet>

            <div className={navStyles.brand}>
                <Link to="/">
                    <img src={Logo} alt="Mahade Walid" />
                </Link>
            </div>

            <div className={navStyles.wrapper}>
                <Link
                    to="/"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Me
                </Link>
                <Link
                    to="/portfolio"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Code
                </Link>
                <Link
                    to="/objects"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Objects
                </Link>
                <Link
                    to="/photo"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Photo
                </Link>
                <Link
                    to="/video"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Video
                </Link>
                <Link
                    to="/contact"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Contact
                </Link>
                <Link
                    to="/blog"
                    className={navStyles.navItem + " " + navStyles.hasDropdown}
                    activeClassName={navStyles.active}
                >
                    Blog
                    <div className={navStyles.dropdown}>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                    </div>
                </Link>
            </div>
        </nav>

        <div className="mt-20 mb-35">
            <Separator />
        </div>
    </header>
);
