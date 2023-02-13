import {Route, Routes} from "react-router-dom";

import Portfolio from "./pages/Portfolio/Portfolio";
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
                    {/*<Route index path="/" element={<Intro data={config.pages.intro}/>}/>*/}
                    {/*<Route path="/about" element={<About data={config.pages?.about}/>}/>*/}
                    <Route path="/portfolio" element={<Portfolio />}/>
                    {/*<Route path={"/portfolio/:projectID"} element={<Project />}/>*/}
                    {/*<Route path=":pageSlug" element={<GenericPage />}/>*/}
                </Routes>

            </div>
        </div>
    );
}

export default App;
