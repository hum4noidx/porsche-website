import React, {useEffect, useState} from "react";
import {useFetching} from "../hooks/UseFetching";
import CarService from "../API/CarService";


const CarGallery = ({car_slug}) => {
    const [photos, setCarsPhotos] = useState([]);

    const [fetchingHighlights, isCardsLoading, cardsError] = useFetching(async () => {
        let response = await CarService.get_car_gallery(car_slug);
        setCarsPhotos(response)
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
    if (!photos || photos.length === 0) {
        return
    }
    const group1 = photos.slice(0, 3);
    const group2 = photos.slice(3, 6);

    return (
        <section>
            <p className="gallery">Gallery</p>
            <div className="container_gallery">
                <div className="box_1">
                    {group1.map((img, index) => (
                        <div className="gitem" key={index}>
                            <img src={img.image_url} alt={`img_${index + 1}`}/>
                        </div>
                    ))}
                </div>
                <div className="box_1">
                    {group2.map((img, index) => (
                        <div className="gitem_2" key={index + 3}>
                            <img src={img.image_url} alt={`img_${index + 4}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CarGallery;