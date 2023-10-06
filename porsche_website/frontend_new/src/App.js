import menu from './assets/menu.svg'
import porsche_logo from './assets/porsche-logo.svg'
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
                    </header>
                </div>
                <div className="Main">
                    <div className="Main-text">
                        <h1 className="Main-text-title">The new Taycan</h1>
                        <p className="Main-text-subtitle">Soul, electrified.</p>
                        <a href="#" className="Main-text-link">Discover more</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
