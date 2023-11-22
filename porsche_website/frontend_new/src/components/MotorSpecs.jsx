import React from "react";

const MotorSpecs = ({motor_specs}) => {
    let motor = motor_specs[0]
    delete motor.id
    delete motor.car_specs_id
    // "motor_specs": [
    //     {
    //         "car_specs_id": 0,
    //         "bore": "string",
    //         "stroke": "string",
    //         "displacement": "string",
    //         "max_power": "string",
    //         "max_power_rpm": "string",
    //         "max_engine_speed": "string",
    //         "max_torque": "string",
    //         "max_torque_rpm": "string",
    //         "max_power_per_liter": "string",
    //         "id": 0
    //     }
    // ],

    // iterate through specs and create a div for each one. Change max_torque to Max Torque and so on
    const specsNames = Object.keys(motor)
    const specsValues = Object.values(motor)


    const listSpecs = specsNames.map((spec, index) => {
        let specName = spec.replace(/_/g, " ")
        specName = specName.charAt(0).toUpperCase() + specName.slice(1)
        return (
            <>
                <div className="detail-card" key={index}>
                    <div className="detail-name"><span>{specName}</span>
                    </div>
                    <div className="detail-value"><span>{specsValues[index]}</span></div>
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
                <p className="per">Motor</p>
                <hr/>
            </div>
            {listSpecs}
        </>
    );

}

export default MotorSpecs;