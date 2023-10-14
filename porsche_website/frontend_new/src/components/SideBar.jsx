import React from 'react';
import ModelCategoryList from "./ModelCardList";
import toggleSidebar from '../App.js'
import menu from "../assets/menu.svg";

function Sidebar({isOpen, modelCategories}) {
    return (
        <div>
            <div
                className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-800 p-8`}>
                <ModelCategoryList
                    modelCategories={modelCategories}
                />
            </div>
        </div>

    );
}

export default Sidebar;