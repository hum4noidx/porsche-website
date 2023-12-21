import React from "react";
import styles from './TechnicalSpecs.module.css';

const BodySpecs = ({body_specs}) => {
    let body = body_specs[0]
    delete body.id
    delete body.car_specs_id

    const bodyNames = Object.keys(body)
    const bodyValues = Object.values(body)

    const listBodySpecs = bodyNames.map((spec, index) => {
        let specBodyName = spec.replace(/_/g, " ")
        specBodyName = specBodyName.charAt(0).toUpperCase() + specBodyName.slice(1)
        return (
            <>
                <div className={styles.detail_card} key={index}>
                    <div className={styles.detail_name}><span>{specBodyName}</span></div>
                    <div className={styles.detail_value}><span>{bodyValues[index]}</span></div>
                </div>
                <div style={{width: "90%"}}>
                    <hr/>
                </div>
            </>
        )
    })

    return (
        <>
            <div style={{width: "95%"}}>
                <p className={styles.per}>Body</p>
                <hr/>
            </div>
            {listBodySpecs}
        </>
    );
}

export default BodySpecs;