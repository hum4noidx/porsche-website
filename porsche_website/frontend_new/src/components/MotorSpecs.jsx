import React from "react";

const MotorSpecs = ({motor_specs}) => {
    let motor = motor_specs[0]
    return (
        <>
            <div style={{width: "95%"}}>
                <p className="per">Motor</p>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Bore</span>
                </div>
                <div className="detail-value"><span>{motor.bore} mm</span>
                </div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Stroke</span>
                </div>
                <div className="detail-value"><span>{motor.stroke} mm</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Displacement</span>
                </div>
                <div className="detail-value"><span>{motor.displacement} cc</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Max. power</span>
                </div>
                <div className="detail-value"><span>{motor.max_power} hp</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Max. power at rpm</span>
                </div>
                <div className="detail-value"><span>{motor.max_power_rpm} rpm</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Max. engine speed</span>
                </div>
                <div className="detail-value"><span>{motor.max_engine_speed} rpm</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Max. torque</span>
                </div>
                <div className="detail-value"><span>{motor.max_torque_speed} lb-ft</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Max. torque at rpm</span>
                </div>
                <div className="detail-value"><span>{motor.max_torque_rpm} rpm</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
            <div className="detail-card">
                <div className="detail-name"><span>Max. power per liter</span>
                </div>
                <div className="detail-value"><span>{motor.max_power_per_liter} hp/l</span></div>
            </div>
            <div style={{width: "90%"}}>
                <hr/>
            </div>
        </>
    );

}

export default MotorSpecs;