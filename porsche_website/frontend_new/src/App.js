import menu from './assets/menu.svg'
import porsche_logo from './assets/porsche-logo.svg'
import search from './assets/search.svg'
import porsche_718 from './assets/porsche-718.png'
import porsche_911 from './assets/porsche-911.png'
import porsche_taycan from './assets/porsche-taycan.png'
import porsche_panamera from './assets/porsche-panamera.png'
import porsche_macan from './assets/porsche-macan.png'
import porsche_cayenne from './assets/porsche-cayenne.png'
import './App.css';
import ModelCategoryList from './components/ModelCardList'

let modelCategories = [
    {url: 'models/porsche_718', img: porsche_718, slug: 'porsche_718'},
    {url: 'models/porsche_911', img: porsche_911, slug: 'porsche_911'},
    {url: 'models/porsche_taycan', img: porsche_taycan, slug: 'porsche_taycan'},
    {url: 'models/porsche_panamera', img: porsche_panamera, slug: 'porsche_panamera'},
    {url: 'models/porsche_macan', img: porsche_macan, slug: 'porsche_macan'},
    {url: 'models/porsche_cayenne', img: porsche_cayenne, slug: 'porsche_cayenne'},

]

function App() {
    return (
        <div className="App">
            <section className="Section-main">
                <div className="Container">
                    <header className="Header">
                        <div className="Header-Menu">
                            <a href="#">
                                <img src={menu} alt="menu-button" className="Header-menu"/>
                            </a>
                        </div>

                        <a href="#">
                            <img src={porsche_logo} alt="porshe-logo" className="Header-logo"/>
                        </a>

                        <a href="#">
                            <img src={search} alt="search-button" className="Header-search"/>
                        </a>
                    </header>
                </div>
                <div className="Container">
                    <div className="Main">
                        <div className="Main-text">
                            <h1 className="Main-text-title">Fully-jaw-dropping-electric.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Models">
                <div className="Container">
                    <header className="Models-header">
                        <ModelCategoryList
                            modelCategories={modelCategories}
                        />
                    </header>
                </div>
            </section>
        </div>
    );
}

export default App;
