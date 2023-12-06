import React from "react";
import parse from 'html-react-parser';
import MotorSpecs from "../TechicalSpecs/MotorSpecs";
import PerformanceSpecs from "../TechicalSpecs/Performance";
import BaseBody from "./BaseBody";
import BodySpecs from "../TechicalSpecs/Body";
import styles from './CarSpecs.module.css';

const CarSpecs = ({car}) => {
    return (
        <section className="container-fluid">
            <div className={styles.car_specs}>
                <div className={`${styles.car_details} flex-shrink-0`}>
                    <div>
                        <p className={`${styles.tech_sp}`}>Technical Specs</p>
                    </div>

                    <div className={styles.details_group}>
                        {car.car_specs && <MotorSpecs motor_specs={car.car_specs.motor_specs}/>}

                        {car.car_specs && <PerformanceSpecs performance_specs={car.car_specs.performance_specs}/>}

                        {car.car_specs && <BodySpecs body_specs={car.car_specs.body_specs}/>}
                    </div>
                </div>

                <div className={`${styles.car_inform} flex-grow-1 container`}>
                    <div className="image_wrapper">
                        {car.specs_page_photo && parse(car.specs_page_photo)}

                    </div>

                    <div className="specs_wrapper">
                        {car.car_specs && <BaseBody body_specs={car.car_specs.body_specs}/>}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default CarSpecs;