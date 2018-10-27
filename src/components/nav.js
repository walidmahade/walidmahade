import React from "react";
import navStyles from "./nav.module.scss";
import { Link } from "@reach/router";

export default () => (
    <nav className={navStyles.mainMenu}>
        <div className={navStyles.wrapper}>
            <Link to="/" className={navStyles.navItem}>
                Home
            </Link>
            <Link to="/about-css-modules" className={navStyles.navItem}>
                About
            </Link>
            <Link to="/contact" className={navStyles.navItem}>
                Contact
            </Link>
        </div>
    </nav>
);
