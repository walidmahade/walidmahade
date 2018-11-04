import React from "react";
import navStyles from "./header.module.scss";
import "./global.css";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Logo from "../static/logo.png";
import Separator from "./separator";

export default () => (
    <header>
        <nav className={navStyles.mainMenu}>
            <Helmet>
                {/* <script
                    type="text/javascript"
                    src="//fast.fonts.net/jsapi/4e167be2-6a45-4beb-821d-ddb337f6391d.js"
                /> */}
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400|PT+Sans:700|PT+Serif"
                    rel="stylesheet"
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
                    to="/about-css-modules"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className={navStyles.navItem}
                    activeClassName={navStyles.active}
                >
                    Contact
                </Link>
            </div>
        </nav>

        <Separator />
    </header>
);
