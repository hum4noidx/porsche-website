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
                        <div className="model-categories">
                            <a href="#">
                                <img src={porsche_718} alt="img-718" className="porsche-718"/>
                            </a>

                            <a href="#">
                                <img src={porsche_911} alt="img-911" className="porsche-911"/>
                            </a>

                            <a href="#">
                                <img src={porsche_taycan} alt="img-taycan" className="porsche-taycan"/>
                            </a>

                            <a href="#">
                                <img src={porsche_panamera} alt="img-panamera" className="porsche-panamera"/>
                            </a>

                            <a href="#">
                                <img src={porsche_macan} alt="img-macan" className="porsche-macan"/>
                            </a>

                            <a href="#">
                                <img src={porsche_cayenne} alt="img-cayenne" className="porsche-cayenne"/>
                            </a>
                        </div>
                    </header>
                </div>
            </section>
        </div>
    );
}

export default App;
