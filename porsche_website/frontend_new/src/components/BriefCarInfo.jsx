import React from "react";

const BriefCarInfo = ({car, category}) => {
    console.log(car)
    return (
        <section className="specs_section">
            <div className="car_model">
                <img src={car.overview_photo} alt={car.slug} className="car_img"/>
                <div className="car_name">
                    {car.name}
                </div>
                <div className="car_model_price">
                    From $ {(car.price / 1000).toFixed(3).toString().replace(".", ",")}
                </div>
            </div>
        </section>
    )
}
export default BriefCarInfo;