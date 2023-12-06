import React, {useEffect, useState} from "react";
import {useFetching} from "../../hooks/UseFetching";
import CarService from "../../API/CarService";
import CarHighlight from "./CarHighlight";
import styles from './CarHighlight.module.css';

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
        return <div>An error occurred loading highlights for this car</div>
    }
    if (!highlights || highlights.length === 0) {
        return
    }
    const listCarHighlights = highlights.map((highlight, index) =>
        <CarHighlight key={index} highlight={highlight}/>
    );


    return (
        <section className="container-fluid">
            <p className={styles.tech_sp_hl}>911 Carrera Highlights</p>
            <div className={styles.highlights_group}>
                <img src={highlights[0].image_url} alt={`${car_slug}_image`} className={"img-fluid w-100"}/>
                <div className={"card-group"}>
                    {listCarHighlights}
                </div>
            </div>
        </section>
    )
}

export default CarHighlightList;