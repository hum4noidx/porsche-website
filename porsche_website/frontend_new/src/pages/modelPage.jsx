import React, {useEffect, useState} from "react";
import Header from "../components/UI/Header/Header";
import Sidebar from "../components/SideBar";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/UseFetching";
import CarService from "../API/CarService";
import porsche_normal from "../porsche-normal.webp";
import Footer from "../components/UI/Footer/Footer";
import BriefCarInfo from "../components/BriefCarInfo";
import MotorSpecs from "../components/MotorSpecs";
import PerformanceSpecs from "../components/Performance";
import BodySpecs from "../components/Body";
import BaseBody from "../components/BaseBody";
import CarHighlightList from "../components/CarHighlightList";
import parse from "html-react-parser";

const ModelPage = ({toggleSideBar, isSidebarOpen}) => {
    let {car_id} = useParams()

    const [car, setCar] = useState([]);
    const [fetchingCar, isCarLoading, carError] = useFetching(async () => {
        let response = await CarService.get_car_by_id(car_id);
        setCar(response)
    });
    useEffect(() => {
        fetchingCar().catch(e => console.log(e))
    }, [car_id]);
    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar}/>
            <Header toggleSidebar={toggleSideBar} color={'#000000'}/>

            <section className="Section-model">
                <BriefCarInfo car={car} category={car_id}/>
                <section className={"container-fluid"}>
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

                <CarHighlightList car_slug={car_id}/>

                <section>
                    <div>
                        <div className="container_new">
                            <img src={porsche_normal} alt="coupe_carrera" className="porsche_normal"/>
                            <div className="top-left_new" style={{width: "40%"}}>
                                <p className="body_shapes">Car body shapes</p>
                                <span className="bold-text_coupe">Coupé</span>
                                <div className="line">
                                </div>
                                <span className="bold-text_new">The Coupé version of the 911 embodies Porsche DNA in
                                        its purest form: the long, flat bonnet, the steeply inclined windscreen. And the
                                        roof line that slopes gently down towards the rear, already characterized the
                                        original 911.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <p className="gallery">Gallery</p>
                        <div className="container_gallery">
                            <div className="box_1">
                                <div className="gitem">
                                    <img src="https://placehold.co/1000x500" alt="img_1"/>
                                </div>
                                <div className="gitem">
                                    <img src="https://placehold.co/1000x500" alt="img_1"/>
                                </div>
                                <div className="gitem">
                                    <img src="https://placehold.co/1000x500" alt="img_1"/>
                                </div>
                            </div>
                            <div className="box_1">
                                <div className="gitem_2">
                                    <img src="https://placehold.co/1000x500" alt="img_1"/>
                                </div>
                                <div className="gitem_2">
                                    <img src="https://placehold.co/1000x500" alt="img_1"/>
                                </div>
                                <div className="gitem_2">
                                    <img src="https://placehold.co/1000x500" alt="img_1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <Footer/>
        </>
    )
}

export default ModelPage
