import React from "react";

const MainBodySpecs = ({body_specs}) => {
    let body = body_specs[0]
    delete body.id
    delete body.car_specs_id

    return (
        <>
            <div className="top-left">
                <span>Height</span>
                <br/>
                <span className="bold-text">{body.height}</span>
            </div>
            <div className="top-right">
                <span>Width</span>
                <br/>
                <span className="bold-text">{body.width}</span>
            </div>
            <div className="bottom-left">
                <span>Wheelbase</span>
                <br/>
                <span className="bold-text">{body.wheelbase}</span>
            </div>
            <div className="bottom-right">
                <span>Length</span>
                <br/>
                <span className="bold-text">{body.length}</span>
            </div>
        </>
    )
}

export default MainBodySpecs;