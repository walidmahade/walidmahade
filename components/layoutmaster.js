import React from "react";
import Header from "./header";
import Footer from "./footer";
import Router from "next/router";
import nprogress from "nprogress";


Router.events.on('routeChangeStart', () => {
    nprogress.start()
});
Router.events.on('routeChangeComplete', () => {
    nprogress.done()
});

export default ({ children, className }) => (
    <div className="App">
        <Header />

        <main role="main-content" className={className} >
            {children}
        </main>

        <Footer />
    </div>
);
