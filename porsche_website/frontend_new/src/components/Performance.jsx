import React from "react";

const PerformanceSpecs = ({performance_specs}) => {
    let perform = performance_specs[0]
    delete perform.id
    delete perform.car_specs_id

    const performNames = Object.keys(perform)
    const performValues = Object.values(perform)

    const listPerformSpecs = performNames.map((spec, index) => {
        let specPerformName = spec.replace(/_/g, " ")
        specPerformName = specPerformName.charAt(0).toUpperCase() + specPerformName.slice(1)
        return (
            <>
                <div className="detail-card" key={index}>
                    <div className="detail-name"><span>{specPerformName}</span></div>
                    <div className="detail-value"><span>{performValues[index]}</span></div>
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
                <p className="per">Performance</p>
                <hr/>
            </div>
            {listPerformSpecs}
        </>
    );
}

export default PerformanceSpecs;