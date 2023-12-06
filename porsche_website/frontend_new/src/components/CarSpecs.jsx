import React from "react";
import parse from 'html-react-parser';
import MotorSpecs from "./MotorSpecs";
import PerformanceSpecs from "./Performance";
import BodySpecs from "./Body";
import BaseBody from "./BaseBody";

const CarSpecs = ({car}) => {
    return (
        <section className="container-fluid">
            <div className="car_specs d-flex">
                <div className="car_details flex-shrink-0">
                    <div>
                        <p className="tech_sp">Technical Specs</p>
                    </div>

                    <div>
                        {car.car_specs && <MotorSpecs motor_specs={car.car_specs.motor_specs}/>}

                        {car.car_specs && <PerformanceSpecs performance_specs={car.car_specs.performance_specs}/>}

                        {car.car_specs && <BodySpecs body_specs={car.car_specs.body_specs}/>}
                    </div>
                </div>

                <div className="car_inform flex-grow-1 ms-3 container">
                    <div className="image">
                        {car.specs_page_photo && parse(car.specs_page_photo)}
                    </div>

                    {car.car_specs && <BaseBody body_specs={car.car_specs.body_specs}/>}
                </div>
            </div>
        </section>

    )
}

export default CarSpecs;