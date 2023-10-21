import Sidebar from "../components/SideBar";
import React from "react";
import Header from "../components/Header";


const MainPage = ({toggleSideBar, isSidebarOpen}) => {
    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar}/>
            <section className="Section-main">
                <Header toggleSidebar={toggleSideBar} color={'#FFFFFF'}/>
                <div className="Container">
                    <div className="Main">
                        <div className="Main-text">
                            <h1 className="Main-text-title">Fully-jaw-dropping-electric.</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage
