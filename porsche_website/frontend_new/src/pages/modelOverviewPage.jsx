import React, {useEffect, useState} from "react";
import Header from "../components/UI/Header/Header";
import Sidebar from "../components/SideBar";
import {useParams} from "react-router-dom";
import SmallCarList from "../components/SmallCarList";
import CarService from "../API/CarService";
import {useFetching} from "../hooks/UseFetching";

const ModelsPage = ({toggleSideBar, isSidebarOpen}) => {
    let {model_id} = useParams()

    const [carsCategory, setCarsCategory] = useState([]);
    const [fetchingCarsCategory, isCarsCategoryLoading, carsCategoryError] = useFetching(async () => {
        let response = await CarService.get_cars_by_category(model_id);
        console.log(response)
        setCarsCategory(response)
    });
    console.log(carsCategory)
    useEffect(() => {
        fetchingCarsCategory().catch(e => console.log(e))
    }, [model_id]);

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar}/>

            <section className="Section-models">
                <Header toggleSidebar={toggleSideBar} color={'#000000'}/>
                <div className="Container">
                    <h1>Model overview</h1>
                    <h2>{carsCategory.name}</h2>
                    <SmallCarList cars={carsCategory.cars} category={model_id}/>
                </div>

            </section>
        </>
    )
}

export default ModelsPage;
