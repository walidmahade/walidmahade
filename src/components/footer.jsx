import React from "react";
import styles from "./footer.module.scss";
import Separator from "./global/separator";

export default () => (
    <footer className={styles.footer}>
        <div className="mt-20 mb-20">
            <Separator />
        </div>
        <p>
            Attention is the only human currency we live by, thank you for
            giving me yours.
        </p>
        <div className="find-me">
            <div className="icon">a</div>
            <div className="icon">b</div>
        </div>
    </footer>
);
