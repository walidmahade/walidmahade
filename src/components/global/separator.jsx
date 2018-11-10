import React from "react";
import styles from "./separator.module.scss";

export default () => (
    <section className={styles.separator}>
        <div className={styles.leftc} />
        <div className={styles.line} />
        <div className={styles.rightc} />
    </section>
);
