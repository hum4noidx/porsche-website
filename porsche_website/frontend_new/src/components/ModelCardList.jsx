import {Link, Outlet} from "react-router-dom";

const ModelCategoryList = ({modelCategories}) => {
    const listModelCategories = modelCategories.map(category =>
        <Link to={`/models/${category.slug}`} className="category_car">
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