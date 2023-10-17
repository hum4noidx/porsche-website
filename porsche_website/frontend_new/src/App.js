import './App.css';
import MainPage from "./pages/mainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ModelsPage from "./pages/modelOverviewPage";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/models" element={<ModelsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
