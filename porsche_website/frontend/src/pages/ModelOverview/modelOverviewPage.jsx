import React, {useEffect, useState} from "react";
import Header from "../../components/UI/Header/Header";
import Sidebar from "../../components/SideBar";
import {useParams} from "react-router-dom";
import CarService from "../../API/CarService";
import {useFetching} from "../../hooks/UseFetching";
import Loader from "../../components/Loader/Loader";

import styles from "../../components/CarList/CarList.module.css";
import SmallCarList from "../../components/CarList/SmallCarList";

const ModelsPage = ({toggleSideBar, isSidebarOpen}) => {
    let {model_id} = useParams()

    const [carsCategory, setCarsCategory] = useState([]);
    const [fetchingCarsCategory, isCarsCategoryLoading, carsCategoryError] = useFetching(async () => {
        let response = await CarService.get_cars_by_category(model_id);
        setCarsCategory(response)
    });
    useEffect(() => {
        fetchingCarsCategory().catch(e => console.log(e))
        document.title = "Porsche models"
    }, [model_id]);
    if (isCarsCategoryLoading) {
        return <Loader/>
    }
    if (!carsCategory || carsCategory.length === 0) {
        return <div>Not Found!</div>
    }
    return (
        <>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar}/>

        <section className="Section-models">
            <Header toggleSidebar={toggleSideBar} color={'#000000'}/>
            <div className={`Container ${styles.car_list}`}>
                {carsCategory.name && <h3>{carsCategory.name} models</h3>}
                <SmallCarList cars={carsCategory.cars} category={model_id}/>
        </div>

        </section>
</>
)
}

export default ModelsPage;
