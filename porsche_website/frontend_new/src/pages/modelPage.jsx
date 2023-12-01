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
                                <svg viewBox="0 0 303.57 136.88" role="img"
                                     aria-label="Porsche 911 Carrera technical drawing top view."
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="m308.77 77.19c0 18.53-3.17 33-9.16 41.69-2.87 4.19-11.9 9.73-15.12 11.17-2 .88-4.87 2.29-7.66 3.65-2 1-3.87 1.88-5.4 2.59a21.91 21.91 0 0 1 -8.85 2.56c-.32 0-.9.07-1.68.11-.56.37-3.84 1.27-22.61 1.27-17.33 0-21.15-.64-22-1h-2c-3.23-.06-5.37-.84-8.93-2.56-3.06-1.48-8.76-2.12-12.27-2.28h-.22c-.56 0-1.07 0-1.49 0-3 0-46 1-51.23 1.12l2.05 5.21c1.21 2.8 1 3.65.74 4.05a.82.82 0 0 1 -.69.38c-.51 0-1 .05-1.45.05a12.5 12.5 0 0 1 -6.76-1.79s-.07 0-.1 0c-2.59-1.58-5.83-5.26-7.66-7.49l-10.65.21c-3.19.07-5.3.11-5.88.11a14.62 14.62 0 0 0 -5.77 1 31 31 0 0 1 -9.34 1.63c-3.07.13-9.47.28-15.65.42l-5.62.13c-1.79 0-3.58.06-5.36.06-3.87 0-7.69-.1-11.4-.29 0 0-5.42-.12-8.4-.47a70.75 70.75 0 0 1 -13.21-3.28c-4.08-1.52-5.79-2.39-7.94-4l-1.38-1a7.22 7.22 0 0 1 -1.35-1.17 3.41 3.41 0 0 1 -1.12-1.87v-.23a4.39 4.39 0 0 0 -.52-1.58.27.27 0 0 1 0-.15 142.79 142.79 0 0 1 -9.94-15.12 75 75 0 0 1 -4.35-9c-.09-.19-2.27-5.3-2.27-24.07s2.11-23.96 2.2-24.17a77.21 77.21 0 0 1 4.35-9 141.25 141.25 0 0 1 9.94-15.08.27.27 0 0 1 0-.15 4.39 4.39 0 0 0 .52-1.58v-.23a3.38 3.38 0 0 1 1.12-1.87 7.07 7.07 0 0 1 1.41-1.17l1.39-1.05c2.15-1.64 3.86-2.51 7.94-4a70.75 70.75 0 0 1 13.24-3.19c3-.35 8.35-.47 8.4-.47 5.41-.29 11-.36 16.76-.23l5.39.12c6.28.15 12.77.29 15.88.43a30.64 30.64 0 0 1 9.33 1.58 14.66 14.66 0 0 0 5.77.95c.58 0 2.7 0 5.92.11l10.61.21c1.85-2.25 5.07-5.91 7.66-7.49l.14-.05a13.28 13.28 0 0 1 8.17-1.71.82.82 0 0 1 .69.38c.26.4.47 1.25-.74 4.06l-2.05 5.2c5.29.15 48.29 1.15 51.28 1.15h1.49.11c3.51-.15 9.3-.78 12.38-2.28 3.56-1.72 5.7-2.5 8.93-2.56h2c.82-.32 4.64-1 22-1 18.76 0 22 .9 22.6 1.27.78 0 1.38.07 1.69.11a21.91 21.91 0 0 1 8.85 2.56c1.53.71 3.42 1.63 5.42 2.6 2.79 1.36 5.68 2.76 7.64 3.64 3.22 1.44 12.25 7 15.12 11.17 6 8.74 9.16 23.15 9.16 41.69z"
                                            strokeWidth=".85" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m236.42 117.57a5.87 5.87 0 0 1 -2 .93l-3.06.61c-7.84 1.57-29.9 4.9-40.22 6s-27.77 1.56-36.93 1.77c-6.6.15-22.3-.39-31.5-.47"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m126.56 135.59c-8.91.17-15.69.33-16.78.33a15 15 0 0 0 -5.89 1 30.77 30.77 0 0 1 -9.23 1.61c-4 .17-13.68.37-21.27.55s-13.39-.08-16.74-.27c0 0-5.38-.11-8.38-.46a69.93 69.93 0 0 1 -13.18-3.18c-3.87-1.44-5.66-2.31-7.86-4a16.62 16.62 0 0 1 -2.7-2.19 3.13 3.13 0 0 1 -1-1.73 5.19 5.19 0 0 0 -.6-1.91"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m6.27 77.17c0 18.94 2.26 24 2.26 24a77.44 77.44 0 0 0 4.34 9 140.49 140.49 0 0 0 10 15.21"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m17 102.41.12.07a3.59 3.59 0 0 0 .59.29c1.75.66 41.33 14.16 80 20.3a123.53 123.53 0 0 0 13 1"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m12.79 77.17c0 15 2.71 23.2 2.71 23.2a4 4 0 0 0 1.54 2"
                                              strokeWidth=".57"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m54.7 138.71a36.12 36.12 0 0 1 -3.67-1c-4.03-1.38-10.16-3.71-14.35-5.42-3.86-1.57-5-3.08-9.68-8.85-4.5-5.6-9.82-20.17-9.82-20.17s-.28-.74-.32-1"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m248.72 139a31.51 31.51 0 0 0 6.1-1.82c2.21-1 9.12-4 13.82-5.88 1.45-.61 2.7-1.1 3.53-1.41a119 119 0 0 0 13.83-6.36c3.07-1.82 10.3-8.27 12.24-12.84s5.89-15.47 5.89-33.49"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m268.83 131.22a15.24 15.24 0 0 0 4.95-.71c3.25-1 13.25-4.8 16.74-7.76s7.65-6.7 10.48-13.87c0 0 .78-1.49-1.21-2"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m271.34 109.46a113.53 113.53 0 0 0 3.62-29" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m267.05 98.09 8.89-.8" strokeWidth=".43"></path>
                                        <path d="m267.76 94.88 9.26-.63" strokeWidth=".43"></path>
                                        <path d="m268.31 91.9 9.67-.46" strokeWidth=".43"></path>
                                        <path d="m268.85 88.81 9.73-.35" strokeWidth=".43"></path>
                                        <path d="m269.09 86 10.03-.47" strokeWidth=".43"></path>
                                        <path d="m269.39 82.9 10.27-.35" strokeWidth=".43"></path>
                                        <path d="m269.63 79.75 10.52-.23" strokeWidth=".43"></path>
                                        <path d="m269.87 76.71 10.46-.06" strokeWidth=".43"></path>
                                        <path d="m269.99 73.84 10.7-.17" strokeWidth=".43"></path>
                                        <path d="m263.81 71.32 16.64-.18v-1.72l-.58.01-16.08.11"
                                              strokeWidth=".43"></path>
                                        <path d="m279.83 68.51v.91" strokeWidth=".43"></path>
                                        <g transform="translate(-5.63 -8.73)">
                                            <path
                                                d="m119.17 127.06a12.45 12.45 0 0 1 -3-.67c-5.53-1.77-27.65-11.2-27.65-49.11"
                                                strokeWidth=".57"></path>
                                            <path d="m120 127.1h-.79" strokeWidth=".57"></path>
                                            <path
                                                d="m237.54 118.24c0 .76-2.24 1.33-2.24 1.33l-3.07.61c-7.83 1.57-29.89 4.91-40.22 5.94s-27.76 1.57-36.92 1.78c-7.68.18-26.46-.32-35.13-.8"
                                                strokeWidth=".28"></path>
                                            <path
                                                d="m120 127.08 24.8-6.51s9.2-2.51 13.11-3.17a185.23 185.23 0 0 1 18.81-1.25c16.43-.43 55.94.66 58.37.88s2.49 1.26 2.49 1.26"
                                                strokeWidth=".57"></path>
                                            <path d="m54.57 128.12c10.27.55 34.68 1.73 57.15 1.88"
                                                  strokeWidth=".28"></path>
                                            <path d="m14.22 93.17s31.44 3.56 71.37 6.4" strokeWidth=".28"></path>
                                            <path
                                                d="m131.11 77.28a2.7 2.7 0 0 0 2.72 2.72l.26.21v3.5a2.57 2.57 0 0 0 1.76 2.72c.74.21 5.83 1.36 5.83 1.36.18 10.88 2 25.26 2.11 25.84s-.24.69-.24.69-26.74 6-28.15 6.27a2 2 0 0 1 -2-.4 71.26 71.26 0 0 1 -14.4-42.91"
                                                strokeWidth=".28"></path>
                                            <path d="m21.35 77.17a5.21 5.21 0 0 1 -.24 1.8h-2s-1.73-.33-1.73-1.8"
                                                  strokeWidth=".43"></path>
                                            <path d="m264.34 109.6c.68-2.24 3.59-12.94 3.59-32.19"
                                                  strokeWidth=".43"></path>
                                            <path d="m190.5 125s.7-.84 5.64-8.85" strokeWidth=".43"></path>
                                            <path
                                                d="m219.67 77.3v27c0 4.47 5.23 3.95 5.23 3.95l32.75-1.18s5.05-.81 5.84-9.06 1.25-16.12 1.25-20.65"
                                                strokeWidth=".28"></path>
                                            <path
                                                d="m134 131.91a2.55 2.55 0 0 0 -2.41-1.65h-4a2.51 2.51 0 0 0 -2.56 2.45 2.43 2.43 0 0 0 .28 1.11s5.24 6.9 9 9.18"
                                                strokeWidth=".57"></path>
                                            <path
                                                d="m139.5 134.82c-1.1-2.61-1.84-2.7-1.84-2.7l-9.73-.59a1.76 1.76 0 0 0 -1.8 1.73 2.07 2.07 0 0 0 0 .35 17.67 17.67 0 0 0 4 5.86c3.12 3.29 6.07 5.69 12.15 5.23 0 0 1.36.25-.4-3.84z"
                                                strokeWidth=".57"></path>
                                            <path d="m235.42 123.87a298.27 298.27 0 0 0 42.58-6.39"
                                                  strokeWidth=".28"></path>
                                            <path d="m233.78 115.84c15.68-.79 34.16-2 43.8-2.79"
                                                  strokeWidth=".28"></path>
                                            <path
                                                d="m221.35 111.84c2.17 0 57.16-2.72 57.16-2.72a5.49 5.49 0 0 0 4.39-4 82.87 82.87 0 0 0 4.62-27.82"
                                                strokeWidth=".57"></path>
                                            <path d="m216.84 77.27v30.44c0 4.6 4.51 4.13 4.51 4.13"
                                                  strokeWidth=".43"></path>
                                            <path d="m147.84 112.52s37.77-2.36 68.66-4.46" strokeWidth=".28"></path>
                                            <path d="m216.84 77.27v30.44c0 4.6 4.51 4.13 4.51 4.13"
                                                  strokeWidth=".57"></path>
                                            <path
                                                d="m113.86 125.46s29.94-8.55 31.38-8.9 2.72-1.09 1.85-5.52c-.91-4.64-3.33-10.37-3.33-33.73"
                                                strokeWidth=".57"></path>
                                            <path
                                                d="m42.91 115.32c-6-2.32-11.63-2-13.26 1.05-1.87 3.51 2.29 9.29 9.29 12.91a25.65 25.65 0 0 0 7 2.43"
                                                strokeWidth=".28"></path>
                                            <path
                                                d="m48.87 125.05a11.69 11.69 0 0 0 -3-5.46c-3.19-3.4-7.44-4.64-9.5-2.76s-1.15 6.14 2 9.54 7.44 4.64 9.5 2.77a3.3 3.3 0 0 0 .46-.53"
                                                strokeWidth=".28"></path>
                                            <path
                                                d="m50.31 125.16a14.46 14.46 0 0 0 -3.62-6.33 15.58 15.58 0 0 0 -4.85-3.56"
                                                strokeWidth=".28"></path>
                                            <path d="m47.28 131.48a4.05 4.05 0 0 0 1.92-.95 3.85 3.85 0 0 0 1.11-1.78"
                                                  strokeWidth=".28"></path>
                                            <path d="m52.92 125.77-5.72-.66a7.45 7.45 0 0 0 0 3l5.72.57"
                                                  strokeWidth=".28"></path>
                                            <path d="m46.86 127.89a2.28 2.28 0 0 1 -1.75-1.62" strokeWidth=".28"></path>
                                            <path d="m44.78 126.17s-5.75-2.65-7.6-7.38" strokeWidth=".28"></path>
                                            <path d="m45 126.2a1 1 0 0 1 .84-.89" strokeWidth=".28"></path>
                                            <path d="m46.9 126.67a8.16 8.16 0 0 0 -1.31-1.86c-.88-.92-2.83-4.23-6.4-6"
                                                  strokeWidth=".28"></path>
                                            <path d="m35.83 118.16s3.2.06 9.15 2.28" strokeWidth=".28"></path>
                                        </g>
                                        <path d="m40.32 111.38-.64.53v.79l1.92.4" strokeWidth=".28"></path>
                                        <path d="m39.28 117.93-5.58.2" strokeWidth=".28"></path>
                                        <path
                                            d="m97.9 94.4c.74 2.86 2.51 9.42 3.26 12l.65-.14c-4-13.87-8.25-33.54-8.25-33.54l-.66.14s1.54 7.14 3.62 15.74"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m96.86 92s1.17 5.87 1.41 7.79c0 0 .25 2.23.55 5s.55 5.14.55 5.14.13 3.13.11 3.9"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m99.43 103.87s1.87 8.3 2 8.92c0 0 .37 1.86-.41 1.87" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m100.75 113.22-1.56-10.81c-.7-5.46-1.73-10-1.73-10a5.24 5.24 0 0 1 -.52-.41 1.21 1.21 0 0 1 -.33-.43c-.08-.32-.5-2.55-.5-2.55l.28-.35.69-.14"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m90.68 80.3.43-.07" strokeWidth=".43"></path>
                                        <path d="m91.42 79.88-.15.21" strokeWidth=".43"></path>
                                        <path d="m91.24 80.44.7 2.99" strokeWidth=".43"></path>
                                        <path
                                            d="m102.39 46.24-.52-.28s-.49-.28-.71.19-.93 2-.93 2l-.14.9-1 2.15.28.16.13.17.84-1.78.63-.73h.26z"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m95.27 39.93.96-2.29" strokeWidth=".43"></path>
                                        <path d="m99.1 51.22s-1.37 2.78-6.41 14.78c0 0-3.36 6.64-3.81 7.49"
                                              strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m99.43 51.48s-1.37 2.81-6.43 14.78v.28s-1.3 5.1-1.58 6a8 8 0 0 1 -.87 2.26"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m85.04 64.18 2.21-6.38" strokeWidth=".43"></path>
                                        <path
                                            d="m102.11 45.93c1.77-3.89 3.72-8.1 5.62-12l.46.17c-5.69 11.59-12 26.31-12 26.31l-.43-.2"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m95.3 105.9-.53-.04" strokeWidth=".43"></path>
                                        <path
                                            d="m90.68 74.24a7.14 7.14 0 0 0 -.36 2.41 28.89 28.89 0 0 0 .26 3.1 3.29 3.29 0 0 1 0 1.39.86.86 0 0 1 -1 .72c-.59 0-.74-.37-.74-.37"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m84.18 64.1.49.33" strokeWidth=".43"></path>
                                        <path d="m90.42 73.38s-.28.56.11.83" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m90.22 80.91a.68.68 0 0 1 -.73.66.75.75 0 0 1 .18-1.47.68.68 0 0 1 .55.81z"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m279.22 117.19s27-6.74-.09-4.22" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m206.73 127.42a55.37 55.37 0 0 1 6.73 3.57c4.7 2.78 14.25 6.35 27 5.43a65 65 0 0 0 15.61-4.51c8.34-3.57 19.37-7.54 23.81-8.87"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m52.32 130c2.31-3 .11-8.45-4.92-12.24s-11-4.46-13.28-1.49-.12 8.48 4.88 12.27 11 4.46 13.32 1.46z"
                                            opacity=".5" strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m52.32 130c2.31-3 .11-8.45-4.92-12.24s-11-4.46-13.28-1.49-.12 8.48 4.88 12.27 11 4.46 13.32 1.46z"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m191.27 125s4.32 5 4.32 8.22c0 0 .18 1-2.63 1" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m42.35 134.53a5 5 0 0 1 2.75.33c1.6.6 10.07 3.9 10.07 3.9"
                                              strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m117.59 126.79s-1.39.26-8 9" strokeWidth=".57"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m139.7 135.29s48.54-1.13 51.75-1.13 10.49.61 14.07 2.34 5.66 2.49 8.84 2.54 44.27.06 48.2-.4a21.93 21.93 0 0 0 8.78-2.54c3.7-1.74 9.71-4.74 13.06-6.24s12.26-7.05 15-11.1 9.13-15.26 9.13-41.61"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m156.6 111.8s-2.77-12.75-2.77-34.8" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m194.05 100.38v-31.9" strokeWidth=".28"></path>
                                        <path d="m260.88 138.76s.24 1.33-22.59 1.33c-22.14 0-22.08-1.05-22.08-1.05"
                                              strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m236.42 36.77a5.76 5.76 0 0 0 -2-.94l-3.06-.61c-7.84-1.56-29.9-4.9-40.22-5.94s-27.77-1.56-36.93-1.77c-6.6-.15-22.3.39-31.5.47"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m126.56 18.75c-8.91-.17-15.69-.33-16.78-.33a15 15 0 0 1 -5.89-1 30.77 30.77 0 0 0 -9.23-1.61c-4-.17-13.68-.37-21.27-.55s-13.4.06-16.74.23c0 0-5.38.12-8.38.47a69.93 69.93 0 0 0 -13.18 3.18c-3.87 1.44-5.66 2.31-7.86 4a16.62 16.62 0 0 0 -2.7 2.19 3.13 3.13 0 0 0 -1 1.73 5.19 5.19 0 0 1 -.6 1.91"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m6.27 77.17c0-18.94 2.26-24 2.26-24a76.4 76.4 0 0 1 4.34-9 140.49 140.49 0 0 1 10.02-15.17"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m17 51.93.12-.07a3.59 3.59 0 0 1 .59-.29c1.75-.66 41.79-14.29 80.45-20.42a123.7 123.7 0 0 1 12.77-1"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m12.79 77.17c0-15 2.71-23.2 2.71-23.2a4 4 0 0 1 1.54-2"
                                              strokeWidth=".57"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m54.7 15.63a36.12 36.12 0 0 0 -3.67.95c-4.03 1.42-10.16 3.77-14.35 5.47-3.86 1.56-5 3.08-9.68 8.85-4.5 5.6-9.82 20.17-9.82 20.17s-.28.74-.32 1"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m248.72 15.34a31.51 31.51 0 0 1 6.1 1.82c2.21.95 9.12 3.94 13.82 5.88 1.45.61 2.7 1.11 3.53 1.41a117.4 117.4 0 0 1 13.83 6.36c3.07 1.82 10.3 8.26 12.24 12.84s5.89 15.47 5.89 33.49"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m268.83 23.12a15.24 15.24 0 0 1 4.95.71c3.25 1 13.25 4.8 16.74 7.76s7.65 6.7 10.48 13.87c0 0 .78 1.48-1.21 2"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m271.34 44.88a113.53 113.53 0 0 1 3.62 29" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m267.05 38.78 8.89.8" strokeWidth=".43"></path>
                                        <path d="m267.76 41.99 9.26.63" strokeWidth=".43"></path>
                                        <path d="m268.31 44.97 9.67.46" strokeWidth=".43"></path>
                                        <path d="m268.85 48.07 9.73.34" strokeWidth=".43"></path>
                                        <path d="m269.09 50.88 10.03.46" strokeWidth=".43"></path>
                                        <path d="m269.39 53.97 10.27.35" strokeWidth=".43"></path>
                                        <path d="m269.63 57.13 10.52.23" strokeWidth=".43"></path>
                                        <path d="m269.87 60.17 10.46.05" strokeWidth=".43"></path>
                                        <path d="m269.99 63.04 10.7.17" strokeWidth=".43"></path>
                                        <path d="m263.81 65.56 16.64.17v1.72l-.58-.01-16.08-.11"
                                              strokeWidth=".43"></path>
                                        <path d="m279.83 68.37v-.92" strokeWidth=".43"></path>
                                        <path
                                            d="m119.17 27.28a12.45 12.45 0 0 0 -3 .67c-5.53 1.77-27.65 11.2-27.65 49.11"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m120 27.24h-.79" strokeWidth=".57"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m237.54 36.1c0-.76-2.24-1.33-2.24-1.33l-3.07-.62c-7.83-1.56-29.89-4.9-40.22-5.94s-27.76-1.56-36.92-1.77c-7.68-.18-26.46.32-35.13.8"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m120 27.26 24.8 6.51s9.2 2.51 13.11 3.17 13.09 1.06 18.77 1.25c16.43.43 55.94-.66 58.37-.88s2.49-1.26 2.49-1.26"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m54.57 26.21c10.27-.54 34.68-1.72 57.15-1.87" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m14.22 61.17s31.44-3.56 71.37-6.41" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m131.11 77.06a2.7 2.7 0 0 1 2.72-2.68l.26-.21v-3.5a2.57 2.57 0 0 1 1.76-2.67c.74-.22 5.83-1.37 5.83-1.37.18-10.87 2-25.26 2.11-25.83s-.24-.69-.24-.69-26.74-6-28.15-6.27a2 2 0 0 0 -2 .4 71.26 71.26 0 0 0 -14.4 42.82"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m21.35 77.16a5.23 5.23 0 0 0 -.24-1.8h-2s-1.73.34-1.73 1.8"
                                              strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m264.34 44.74c.68 2.24 3.59 12.94 3.59 32.19" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m190.5 29.32s.7.84 5.64 8.85" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m219.67 77v-27c0-4.47 5.23-4 5.23-4l32.75 1.19s5.05.81 5.84 9.06 1.25 16.12 1.25 20.64"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m134 22.43a2.55 2.55 0 0 1 -2.41 1.65h-4a2.51 2.51 0 0 1 -2.56-2.45 2.43 2.43 0 0 1 .28-1.11s5.24-6.9 9-9.18"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m139.5 19.52c-1.1 2.62-1.84 2.7-1.84 2.7l-9.73.59a1.76 1.76 0 0 1 -1.8-1.73 2 2 0 0 1 0-.35 17.67 17.67 0 0 1 4-5.86c3.12-3.29 6.07-5.7 12.15-5.23 0 0 1.36-.26-.4 3.84z"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m235.42 30.47a299 299 0 0 1 42.58 6.38" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m233.78 38.5c15.68.79 34.16 2 43.8 2.78" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m221.35 42.5c2.17 0 57.16 2.72 57.16 2.72a5.47 5.47 0 0 1 4.39 4 82.87 82.87 0 0 1 4.62 27.82"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m216.84 77.07v-30.44c0-4.6 4.51-4.13 4.51-4.13" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m147.84 41.82s37.77 2.36 68.66 4.45" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m216.84 77.07v-30.44c0-4.6 4.51-4.13 4.51-4.13" strokeWidth=".57"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m113.86 28.87s29.94 8.56 31.38 8.9 2.72 1.1 1.85 5.53c-.91 4.64-3.33 10.37-3.33 33.73"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m42.91 39c-6 2.32-11.63 2-13.26-1.05-1.87-3.51 2.29-9.29 9.29-12.91a25.31 25.31 0 0 1 7-2.43"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m48.87 29.28a11.59 11.59 0 0 1 -3 5.46c-3.19 3.4-7.44 4.64-9.5 2.77s-1.15-6.14 2-9.54 7.44-4.64 9.5-2.77a3.3 3.3 0 0 1 .46.53"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m50.31 29.18a14.46 14.46 0 0 1 -3.62 6.33 15.58 15.58 0 0 1 -4.85 3.56"
                                              strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m47.28 22.86a4 4 0 0 1 1.92.95 3.85 3.85 0 0 1 1.11 1.78"
                                              strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m52.92 28.57-5.72.66a7.45 7.45 0 0 1 0-3l5.72-.57" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m46.86 26.45a2.28 2.28 0 0 0 -1.75 1.62" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m44.78 28.17s-5.75 2.65-7.6 7.38" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m45 28.13a1.05 1.05 0 0 0 .84.9" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m46.9 27.67a8 8 0 0 1 -1.31 1.85c-.88.93-2.83 4.24-6.4 6.06"
                                              strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m35.83 36.18s3.17-.07 9.17-2.28" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m40.32 25.49-.64-.53v-.79l1.92-.4" strokeWidth=".28"></path>
                                        <path d="m39.28 18.94-5.58-.2" strokeWidth=".28"></path>
                                        <path d="m279.22 37.15s27 6.74-.09 4.22" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m206.73 26.92a55.37 55.37 0 0 0 6.73-3.57c4.7-2.78 14.25-6.36 27-5.43a65.27 65.27 0 0 1 15.61 4.5c8.37 3.58 19.4 7.58 23.84 8.88"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m52.32 24.3c2.31 3 .11 8.45-4.92 12.24s-10.97 4.46-13.28 1.46-.12-8.42 4.88-12.21 11-4.46 13.32-1.49z"
                                            opacity=".5" strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m52.32 24.3c2.31 3 .11 8.45-4.92 12.24s-10.97 4.46-13.28 1.46-.12-8.42 4.88-12.21 11-4.46 13.32-1.49z"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m279 45.23s-.13-.95-.31-1.82a21.37 21.37 0 0 1 -.6-4.42 16.89 16.89 0 0 1 2-5.59c1-1.61 2.2-3.43 2.51-4.16"
                                            strokeWidth=".57" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m191.27 29.32s4.32-5 4.32-8.22c0 0 .18-1-2.63-1" strokeWidth=".43"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m42.35 19.81a5 5 0 0 0 2.75-.33c1.6-.6 10.07-3.9 10.07-3.9"
                                              strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m117.59 27.54s-1.39-.25-8-9" strokeWidth=".57"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m139.7 19.05s48.54 1.13 51.75 1.13 10.49-.61 14.07-2.34 5.66-2.49 8.84-2.55 44.27-.06 48.2.41a21.93 21.93 0 0 1 8.78 2.54c3.66 1.76 9.71 4.76 13.06 6.24s12.26 7.05 15 11.1 9.13 15.26 9.13 41.61"
                                            strokeWidth=".43" transform="translate(-5.63 -8.73)"></path>
                                        <path d="m156.6 42.54s-2.77 12.74-2.77 34.76" strokeWidth=".28"
                                              transform="translate(-5.63 -8.73)"></path>
                                        <path d="m194.05 36.5v31.9" strokeWidth=".28"></path>
                                        <path d="m260.88 15.58s.24-1.33-22.59-1.33c-22.14 0-22.08 1-22.08 1"
                                              strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                        <path
                                            d="m102.44 21.22c0 1.71-3.31 2.9-7.17 2.67s-6.71-1.84-6.61-3.55 3-2.25 6.88-2 6.9 1.34 6.9 2.88z"
                                            strokeWidth=".28" transform="translate(-5.63 -8.73)"></path>
                                    </g>
                                </svg>
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
                            {/*<img src="https://placehold.co/1440x720" alt="coupe_carrera" className="porsche_normal"/>*/}

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
