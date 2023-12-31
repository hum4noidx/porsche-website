import './App.css';
import MainPage from "./pages/mainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react";

import ModelsPage from "./pages/ModelOverview/modelOverviewPage";
import ModelPage from "./pages/modelPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
                <Route path="*" element={<NotFoundPage/>}/>/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;