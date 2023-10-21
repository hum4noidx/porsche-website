import React from "react";
import Header from "../components/Header";
import Sidebar, {modelCategories2} from "../components/SideBar";
import {useParams} from "react-router-dom";

const ModelsPage = ({toggleSideBar, isSidebarOpen}) => {
    const {model_id} = useParams()
    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar}/>

            <section className="Section-models">
                <Header toggleSidebar={toggleSideBar} color={'#000000'}/>
                <div className="Container">
                    <h1>Model overview</h1>
                    <h2>{model_id}</h2>
                    {/*<h2>911 Models</h2>*/}
                    <div className="models">
                        <div className="model">
                            <a href="#">
                                <img src={modelCategories2[model_id].img} alt="porsche-carrera"/>
                            </a>
                            {/*<a href="#">*/}
                            {/*    <img src="https://placehold.co/352x198" alt="porsche-carrera"/>*/}
                            {/*</a>*/}
                            <div className="model_name">
                                911 Carrera
                            </div>
                            <div className="car_price">
                                From $ 114,400 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-t"/>
                            </a>
                            <div className="model_name">
                                911 Carrera T
                            </div>
                            <div className="car_price">
                                From $ 124,900 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Carrera Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 127,200 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-4"/>
                            </a>
                            <div className="model_name">
                                911 Carrera 4
                            </div>
                            <div className="car_price">
                                From $ 121,700 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-4-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Carrera 4 Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 134,500 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-s"/>
                            </a>
                            <div className="model_name">
                                911 Carrera S
                            </div>
                            <div className="car_price">
                                From $ 131,300 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-s-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Carrera S Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 144,100 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-4s"/>
                            </a>
                            <div className="model_name">
                                911 Carrera 4S
                            </div>
                            <div className="car_price">
                                From $ 138,600 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-4s-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Carrera 4S Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 151,400 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-targa-4"/>
                            </a>
                            <div className="model_name">
                                911 Targa 4
                            </div>
                            <div className="car_price">
                                From $ 134,500 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-targa-4s"/>
                            </a>
                            <div className="model_name">
                                911 Targa 4S
                            </div>
                            <div className="car_price">
                                From $ 151,400 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-gts"/>
                            </a>
                            <div className="model_name">
                                911 Carrera GTS
                            </div>
                            <div className="car_price">
                                From $ 150,900 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-gts-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Carrera GTS Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 163,700 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-4-gts"/>
                            </a>
                            <div className="model_name">
                                911 Carrera 4 GTS
                            </div>
                            <div className="car_price">
                                From $ 158,200 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-carrera-4-gts-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Carrera 4 GTS Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 171,000 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-targa-4-gts"/>
                            </a>
                            <div className="model_name">
                                911 Targa 4 GTS
                            </div>
                            <div className="car_price">
                                From $ 171,000 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-edition-50"/>
                            </a>
                            <div className="model_name">
                                911 Edition 50 Years Porsche Design
                            </div>
                            <div className="car_price">
                                From $ 200,700 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-turbo"/>
                            </a>
                            <div className="model_name">
                                911 Turbo
                            </div>
                            <div className="car_price">
                                From $ 197,200 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-turbo-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Turbo Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 210,000 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-turbo-s"/>
                            </a>
                            <div className="model_name">
                                911 Turbo S
                            </div>
                            <div className="car_price">
                                From $ 230,400 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-turbo-s-cabr"/>
                            </a>
                            <div className="model_name">
                                911 Turbo S Cabriolet
                            </div>
                            <div className="car_price">
                                From $ 243,200 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-gt3"/>
                            </a>
                            <div className="model_name">
                                911 GT3
                            </div>
                            <div className="car_price">
                                From $ 182,900 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-gt3-touring-package"/>
                            </a>
                            <div className="model_name">
                                911 with Touring Package
                            </div>
                            <div className="car_price">
                                From $ 182,900 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-gt3-rs"/>
                            </a>
                            <div className="model_name">
                                911 GT3 RS
                            </div>
                            <div className="car_price">
                                From $ 241,300 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-dakar"/>
                            </a>
                            <div className="model_name">
                                911 Dakar
                            </div>
                            <div className="car_price">
                                From $ 222,000 *
                            </div>
                        </div>
                        <div className="model">
                            <a href="#">
                                <img src="https://placehold.co/352x198" alt="porsche-st"/>
                            </a>
                            <div className="model_name">
                                911 S/T
                            </div>
                            <div className="car_price">
                                From $ 290,000 *
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ModelsPage;