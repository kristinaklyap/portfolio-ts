import './App.scss';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import Projects from "./components/Projects/Projects";
import config from "./config.json";
import {ProjectItem} from "./models/ProjectItem"

function App() {

    const projectsData: ProjectItem[] = config.pages.portfolio?.projects
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Socials/>
                <Breadcrumbs pageNo={"01"} pageTitle={"Custom Title"}/>
                <Projects projects={projectsData}/>
            </div>
        </div>
    );
}

export default App;
