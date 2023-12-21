import React from 'react';
import styles from './NotFound.module.css';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={styles.not_found_page}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFoundPage;