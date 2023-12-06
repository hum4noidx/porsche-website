import React from "react";
import styles from './CarSpecs.module.css';

const MainBodySpecs = ({body_specs}) => {
    let body = body_specs[0]
    delete body.id
    delete body.car_specs_id

    return (
        <>
            <div className={`${styles.top_left}`}>
                <span>Height</span>
                <br/>
                <span className={styles.bold_text}>{body.height}</span>
            </div>
            <div className={styles.top_right}>
                <span>Width</span>
                <br/>
                <span className={styles.bold_text}>{body.width}</span>
            </div>
            <div className={styles.bottom_left}>
                <span>Wheelbase</span>
                <br/>
                <span className={styles.bold_text}>{body.wheelbase}</span>
            </div>
            <div className={styles.bottom_right}>
                <span>Length</span>
                <br/>
                <span className={styles.bold_text}>{body.length}</span>
            </div>
        </>
    )
}

export default MainBodySpecs;