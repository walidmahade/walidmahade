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

        <div className="mt-10">
            <Separator />
        </div>
    </header>
);
