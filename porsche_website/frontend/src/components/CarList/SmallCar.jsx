import React from "react";
import {Link} from "react-router-dom";
import styles from "./CarList.module.css";


const SmallCar = ({car, category}) => {
    return (
        <div className={styles.model}>
            <Link to={`/models/${category}/${car.slug}`}>
                <img src={`/assets/cars/${car.slug}.webp`} alt={car.slug}/>
            </Link>
            <p>
                {car.name}
            </p>
            <p>
                From $ {(car.price / 1000).toFixed(3).toString().replace(".", ",")}
            </p>
        </div>
    )
}

export default SmallCar