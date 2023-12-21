import {Link, Outlet} from "react-router-dom";
import CarService from "../API/CarService";
import {useFetching} from "../hooks/UseFetching";
import {useEffect, useState} from "react";

const ModelCategoryList = ({toggleSidebar}) => {
    const [categories, setCarsCategories] = useState([]);

    const [fetchingCars, isCardsLoading, cardsError] = useFetching(async () => {
        let response = await CarService.get_categories();
        setCarsCategories(response)
    });
    useEffect(() => {
        fetchingCars().catch(e => console.log(e))
    }, []);
    if (isCardsLoading) {
        return <div>Loading...</div>
    }
    if (cardsError) {
        return <div>{cardsError}</div>
    }
    const listModelCategories = categories.map((category, index) =>
        <Link key={index} to={`/models/${category.slug}`} className="category_car" onClick={toggleSidebar}>
            <img src={`/assets/categories/${category.slug}.png`} alt={category.name} className="category_car"/>
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
