import porsche_logo_black from "../assets/porsche-logo-black.svg";
import search from "../assets/search-black.svg";
import menu from "../assets/menu-black.svg";
import React, {useState} from "react";
import porsche0 from "../assets/porsche0/porsche-thumbwhite.webp";
// import Header from "../components/Header";

const ModelsPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <section className="Section-models">
                <div className="Container">
                    <header className="Header">
                        <img onClick={() => setSidebarOpen(!isSidebarOpen)} src={menu} alt="close" className="Header-menu-black"/>
                        <a href="#">
                            <img src={porsche_logo_black} alt="porsche-logo-black" className="Header-logo-black"/>
                        </a>
                        <a href="#">
                            <img src={search} alt="search-button-black" className="Header-search-black"/>
                        </a>
                    </header>
                </div>
                <div className="Container">
                    <h1>Model overview</h1>
                    <a href="#">
                        <img src={porsche0} alt="porsche0" className="porsche0"/>
                    </a>
                </div>
            </section>
        </>
    )
}

export default ModelsPage;