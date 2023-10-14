import React, {useState} from 'react';
import porsche_718 from "../assets/porsche-718.png";
import porsche_911 from "../assets/porsche-911.png";
import porsche_taycan from "../assets/porsche-taycan.png";
import porsche_panamera from "../assets/porsche-panamera.png";
import porsche_macan from "../assets/porsche-macan.png";
import porsche_cayenne from "../assets/porsche-cayenne.png";

const ModelCategoryList = ({modelCategories}) => {
    const listModelCategories = modelCategories.map(category =>
        <a href={category.url}>
            <img src={category.img} alt={category.slug}/>
        </a>
    );
    return (
        <div className="model-categories">
            {listModelCategories}
        </div>
    );
}

export default ModelCategoryList