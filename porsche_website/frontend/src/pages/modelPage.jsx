import React, {useEffect, useState} from "react";
import Header from "../components/UI/Header/Header";
import Sidebar from "../components/SideBar";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/UseFetching";
import CarService from "../API/CarService";
import Footer from "../components/UI/Footer/Footer";
import BriefCarInfo from "../components/BriefCarInfo";
import CarHighlightList from "../components/CarHighlights/CarHighlightList.jsx";
import CarGallery from "../components/CarGallery";
import CarSpecs from "../components/CarSpecs/CarSpecs";

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
            <BriefCarInfo car={car} category={car_id}/>
            {car.car_specs && <CarSpecs car={car}/>}
            <CarHighlightList car_slug={car_id}/>
            <CarGallery car_slug={car_id}/>
            <Footer/>
        </>
    )
}

export default ModelPage
