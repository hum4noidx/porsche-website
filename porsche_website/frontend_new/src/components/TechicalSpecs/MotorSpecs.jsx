import React from "react";
import styles from './TechnicalSpecs.module.css';

const MotorSpecs = ({motor_specs}) => {
    let motor = motor_specs[0]
    delete motor.id
    delete motor.car_specs_id
    // iterate through specs and create a div for each one. Change max_torque to Max Torque and so on
    const specsNames = Object.keys(motor)
    const specsValues = Object.values(motor)


    const listSpecs = specsNames.map((spec, index) => {
        let specName = spec.replace(/_/g, " ")
        specName = specName.charAt(0).toUpperCase() + specName.slice(1)
        return (
            <>
                <div className={styles.detail_card} key={index}>
                    <div className={styles.detail_name}><span>{specName}</span>
                    </div>
                    <div className={styles.detail_value}><span>{specsValues[index]}</span></div>
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
                <p className={styles.per}>Motor</p>
                <hr/>
            </div>
            {listSpecs}
        </>
    );

}

export default MotorSpecs;