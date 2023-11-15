import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {

    return (
        <>
            <footer className={styles.footer}>
                <h3>Contacts</h3>
                <p className="footer">@2023 Porsche Cars Russia. <a href="https://github.com/hum4noidx/porsche-website.git">Проект на GitHub.</a></p>
            </footer>
        </>
    )
}

export default Footer;