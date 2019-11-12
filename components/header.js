import React from "react";
import "../styles/main.scss";
import Link from 'next/link'
import NavLink from './Link'
import Head from 'next/head'
// import Favicon from "/images/favicon.ico";
// import Separator from "./global/separator";

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
                {/*<div className="header-bar" />*/}
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
                            <div className={"wrap"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M286.593 440.233c68.78 39.71 156.639 16.298 196.24-52.293 17.339-30.032 22.55-63.747 17.159-95.494l.072.042-25.663-178.569-154.396 62.073-33.412 264.241z" fill="#d7fa91"/><path d="M32.829 373.191c47.164 81.69 151.804 109.574 233.72 62.28s110.087-151.857 62.924-233.547c-20.445-35.413-51.694-60.705-87.208-74.154l.01-.006-199.404-80.93-30.564 212.674.086-.049c-6.421 37.81-.215 77.963 20.436 113.732z" fill="#a5dc69"/><path d="M510.052 291.984a10.201 10.201 0 00-.089-.919L484.3 112.497a10.003 10.003 0 00-13.63-7.857l-118.103 47.482c-5.125 2.06-7.608 7.885-5.549 13.009 2.061 5.126 7.887 7.609 13.01 5.549l106.284-42.731 23.681 164.776c.013.464.059.93.138 1.396 5.178 30.482-.491 62.025-15.96 88.819-17.815 30.856-46.613 52.908-81.092 62.096-34.488 9.19-70.529 4.409-101.487-13.463-.214-.124-.434-.228-.653-.334a181.18 181.18 0 0018.703-16.347l117.078-31.371c5.336-1.429 8.502-6.914 7.072-12.249-1.429-5.335-6.917-8.502-12.248-7.072l-90.086 24.138c9.899-14.726 17.643-30.966 22.935-48.341l80.372-21.535c5.336-1.429 8.502-6.914 7.072-12.249-1.429-5.335-6.917-8.502-12.248-7.072l-59.138 15.846 22.238-38.519 46.995-12.592c5.336-1.429 8.502-6.914 7.072-12.249-1.43-5.335-6.917-8.502-12.248-7.072l-27.675 7.416 21.28-36.859c2.762-4.783 1.123-10.9-3.66-13.661-4.784-2.762-10.9-1.123-13.661 3.66l-21.28 36.858-7.416-27.675c-1.43-5.335-6.915-8.502-12.248-7.072-5.336 1.429-8.502 6.914-7.072 12.249l12.592 46.995-13.012 22.538c.384-32.013-7.807-63.649-24.224-92.083-20.673-35.806-53.298-63.614-91.906-78.346l-.192-.081-45.252-18.366a10 10 0 00-13.027 5.506c-2.077 5.119.388 10.951 5.506 13.028l44.84 18.198c.203.093.41.179.62.259 34.489 13.061 63.643 37.85 82.089 69.801 21.472 37.192 27.136 80.543 15.948 122.071-10.321 38.306-33.847 70.82-66.707 92.544l-16.784-29.07 36.387-135.796c1.43-5.336-1.736-10.819-7.072-12.249a10 10 0 00-12.248 7.072L239.125 367.97l-37.026-64.131 25.244-94.208c1.43-5.336-1.736-10.819-7.072-12.249-5.337-1.43-10.818 1.737-12.248 7.072l-20.066 74.888-29.187-50.553 15.203-56.735c1.43-5.336-1.736-10.819-7.072-12.249a10 10 0 00-12.248 7.072l-10.027 37.415-27.65-47.892c-2.761-4.784-8.878-6.423-13.661-3.66-4.783 2.761-6.423 8.878-3.66 13.661l27.65 47.891-37.414-10.025c-5.337-1.43-10.818 1.737-12.248 7.072-1.43 5.336 1.736 10.819 7.072 12.249l56.734 15.203 29.187 50.553-74.886-20.065c-5.337-1.43-10.818 1.737-12.248 7.072-1.43 5.336 1.736 10.819 7.072 12.249l94.206 25.243 37.026 64.131-116.475-31.209c-5.338-1.43-10.818 1.737-12.248 7.072-1.43 5.336 1.736 10.819 7.072 12.249l135.795 36.386 16.782 29.067c-75.574 37.666-168.581 10.538-211.238-63.345-18.646-32.296-25.478-70.316-19.237-107.057.085-.496.13-.991.138-1.484L50.952 60.908l66.251 26.889a9.998 9.998 0 0013.027-5.506c2.077-5.119-.388-10.951-5.506-13.028L46.632 37.567a10.005 10.005 0 00-13.661 7.845L2.408 258.086a9.897 9.897 0 00-.093 1.01c-6.638 40.917 1.104 83.157 21.853 119.095 33.413 57.875 94.294 90.246 156.878 90.245 27.641 0 55.609-6.339 81.693-19.56l12.291 21.288a9.999 9.999 0 0013.662 3.661c4.784-2.761 6.423-8.878 3.66-13.661l-4.557-7.894c22.098 11.472 46.201 17.341 70.592 17.341 13.29 0 26.666-1.737 39.843-5.249 39.65-10.566 72.774-35.932 93.264-71.423 17.589-30.463 24.161-66.267 18.558-100.955z"/><path d="M158.188 103.643c2.63 0 5.211-1.07 7.07-2.93a10.076 10.076 0 002.931-7.081c0-2.63-1.061-5.201-2.931-7.071a10.072 10.072 0 00-7.07-2.93c-2.631 0-5.211 1.07-7.071 2.93a10.094 10.094 0 00-2.93 7.071c0 2.64 1.069 5.211 2.93 7.081a10.074 10.074 0 007.071 2.93zM427.698 186.119a9.99 9.99 0 008.101 4.125 9.964 9.964 0 005.869-1.909c4.469-3.245 5.462-9.5 2.216-13.968l-.06-.082c-3.246-4.469-9.501-5.461-13.969-2.215-4.469 3.245-5.462 9.5-2.216 13.968l.059.081z"/></svg>
                                <span>Mahade Walid <small className="dot" /></span>
                            </div>
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
                            <li>
                                <NavLink href='/blog'>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink href='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/*<div className="mt-20 mb-35">*/}
                {/*    <Separator />*/}
                {/*</div>*/}
            </header>
        );
    }
}

// export default Header;