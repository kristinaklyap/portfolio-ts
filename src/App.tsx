import {Route, Routes} from "react-router-dom";

import Portfolio from "./pages/Portfolio/Portfolio";
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";

import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";

import './App.scss';

function App() {

    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Socials/>
                <Routes>
                    <Route index path="/" element={<Intro />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    {/*<Route path={"/portfolio/:projectID"} element={<Project />}/>*/}
                    {/*<Route path=":pageSlug" element={<GenericPage />}/>*/}
                </Routes>

            </div>
        </div>
    );
}

export default App;
