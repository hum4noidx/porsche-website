import React from "react";
import parse from 'html-react-parser';

const CarHighlight = ({highlight}) => {
    console.log(highlight)
    return (
        <>
            <div className="Lorem">
                <p className="bold-text_hl">{parse(highlight.heading)}</p>
                <p>{parse(highlight.paragraph)}</p>
            </div>
        </>
    )
}

export default CarHighlight;