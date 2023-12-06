import React from "react";
import parse from 'html-react-parser';

const CarHighlight = ({highlight}) => {
    return (
        <div className="card highlight-card">
            <div className="car-body">
            <h5 className="card-title">{parse(highlight.heading)}</h5>
            <p className="card-text">{parse(highlight.paragraph)}</p>
            </div>
        </div>

    )
}

export default CarHighlight;