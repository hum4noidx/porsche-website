import {Link, Outlet} from "react-router-dom";
import CarService from "../API/CarService";
import {useFetching} from "../hooks/UseFetching";
import {useEffect, useState} from "react";

const ModelCategoryList = ({toggleSidebar}) => {
    const [cars, setCars] = useState([]);

    const [fetchingCars, isCardsLoading, cardsError] = useFetching(async () => {
        let response = await CarService.get_categories();
        console.log(response)
        setCars(...response.data)
    });
    console.log(cars)
    useEffect(() => {
        fetchingCars().catch(e => console.log(e))
    }, []);

    const listModelCategories = cars.map(category =>
        <Link to={`/models/${category.slug}`} className="category_car" onClick={toggleSidebar}>
            <img src={category.img} alt={category.slug} className="category_car"/>
        </Link>
    );
    return (
        <div className="model-categories">
            {listModelCategories}
            <Outlet/>
        </div>
    );
}

export default ModelCategoryList