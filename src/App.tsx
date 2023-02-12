import './App.scss';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header />
        <Breadcrumbs pageNo={"01"} pageTitle={"Custom Title"} />
      </div>
    </div>
  );
}

export default App;
