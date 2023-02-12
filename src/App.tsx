import './App.scss';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Socials/>
                <Breadcrumbs pageNo={"01"} pageTitle={"Custom Title"}/>
            </div>
        </div>
    );
}

export default App;
