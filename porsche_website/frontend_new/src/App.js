import './App.css';
import MainPage from "./pages/mainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react";

import ModelsPage from "./pages/modelOverviewPage";
import ModelPage from "./pages/modelPage";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage toggleSideBar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}/>
                <Route path="/models/:model_id"
                       element={<ModelsPage toggleSideBar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}/>
                <Route path="/models/:models_id/:car_id"
                       element={<ModelPage toggleSideBar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
