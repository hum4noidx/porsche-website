import React, {useEffect, useState} from "react";
import {useFetching} from "../hooks/UseFetching";
import CarService from "../API/CarService";
import {Link} from "react-router-dom";
import CarHighlight from "./CarHighlight";

const CarHighlightList = ({car_slug}) => {
    const [highlights, setCarsHighlights] = useState([]);

    const [fetchingHighlights, isCardsLoading, cardsError] = useFetching(async () => {
        let response = await CarService.get_car_hightlights(car_slug);
        setCarsHighlights(response)
    });
    useEffect(() => {
        fetchingHighlights().catch(e => console.log(e))
    }, []);
    if (isCardsLoading) {
        return <div>Loading...</div>
    }
    if (cardsError) {
        return <div>{cardsError}</div>
    }
    if (!highlights || highlights.length === 0) {
        return
    }
    const listCarHighlights = highlights.map((highlight, index) =>
        <CarHighlight key={index} highlight={highlight}/>
    );


    return (
        <section className="container-fluid">
            <p className="tech_sp_hl">911 Carrera Highlights</p>
            <div className="hl">
                <img src={highlights[0].image_url} alt="carrera_t" className="img-fluid w-100"/>
                <div className="card-group">
                    {listCarHighlights}
                </div>
            </div>
        </section>
    )
}

export default CarHighlightList;