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
                    <a href="#">
                        <img src={modelCategories2[model_id].img} alt="porsche0" className="porsche0"/>
                    </a>
                </div>
            </section>
        </>
    )
}

export default ModelsPage;