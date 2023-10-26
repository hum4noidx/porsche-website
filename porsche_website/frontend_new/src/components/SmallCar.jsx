import React from "react";
import {Link} from "react-router-dom";

const SmallCar = ({car, category}) => {
    return (
        <div className="model">
            <Link to={`/models/${category}/${car.slug}`}>
                <img src={`/assets/cars/${category}/${car.slug}.webp`} alt={car.slug}/>
            </Link>
            <div className="model_name">
                {car.name}
            </div>
            <div className="car_price">
                From $ {(car.price/1000).toFixed(3).toString().replace(".", ",")}
            </div>
        </div>
    )
}

export default SmallCar