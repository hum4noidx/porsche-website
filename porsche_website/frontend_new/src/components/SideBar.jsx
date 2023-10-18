import React, {useEffect, useRef} from 'react';
import ModelCategoryList from "./ModelCardList";
import porsche_718 from "../assets/porsche-718.png";
import porsche_911 from "../assets/porsche-911.png";
import porsche_taycan from "../assets/porsche-taycan.png";
import porsche_panamera from "../assets/porsche-panamera.png";
import porsche_macan from "../assets/porsche-macan.png";
import porsche_cayenne from "../assets/porsche-cayenne.png";

let modelCategories = [
    {url: 'models/porsche_718', img: porsche_718, slug: 'porsche_718'},
    {url: 'models/porsche_911', img: porsche_911, slug: 'porsche_911'},
    {url: 'models/porsche_taycan', img: porsche_taycan, slug: 'porsche_taycan'},
    {url: 'models/porsche_panamera', img: porsche_panamera, slug: 'porsche_panamera'},
    {url: 'models/porsche_macan', img: porsche_macan, slug: 'porsche_macan'},
    {url: 'models/porsche_cayenne', img: porsche_cayenne, slug: 'porsche_cayenne'},
];


let modelCategories2 = {
    "porsche_718": {url: 'models/porsche_718', img: porsche_718, slug: 'porsche_718'},
    "porsche_911": {url: 'models/porsche_911', img: porsche_911, slug: 'porsche_911'},
    "porsche_taycan": {url: 'models/porsche_taycan', img: porsche_taycan, slug: 'porsche_taycan'},
    "porsche_panamera": {url: 'models/porsche_panamera', img: porsche_panamera, slug: 'porsche_panamera'},
    "porsche_macan": {url: 'models/porsche_macan', img: porsche_macan, slug: 'porsche_macan'},
    "porsche_cayenne": {url: 'models/porsche_cayenne', img: porsche_cayenne, slug: 'porsche_cayenne'},
};

function Sidebar({isOpen, toggleSidebar, setSidebarOpen}) {
    const sideBarRef = useRef(null)
    const navInteract = (open) => {
        if (!sideBarRef.current) return
        if (!open) {
            sideBarRef.current.style.width = "0"
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
            toggleSidebar()
        } else {
            sideBarRef.current.style.width = "250px"
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
        }
    }
    useEffect(() => {
        if (isOpen) navInteract(true)
    }, [isOpen]);
    return (
        <div>
            <div id="mySidenav" ref={sideBarRef}
                 className={`sidenav fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-800 p-8`}>
                <ModelCategoryList
                    modelCategories={modelCategories}
                />
                <a href="javascript:void(0)" className="close-btn" onClick={() => navInteract(false)}>&times;</a>

            </div>
        </div>

    );
}

export default Sidebar;
export {modelCategories2};