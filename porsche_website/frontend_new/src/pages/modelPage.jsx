import React from "react";
import Header from "../components/Header";
import Sidebar, from "../components/SideBar";
// import porsche_carrera from "../assets/911-porsche-carrera.webp";

const ModelPage = ({toggleSideBar, isSidebarOpen}) => {
    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar}/>

            <section className="Section-model">
                <Header toggleSidebar={toggleSideBar} color={'#000000'}/>
                <div className="Container">
                    <div className="car_model">
                        <a href="#">
                            <img src="https://placehold.co/960x450" alt="carrera"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ModelPage