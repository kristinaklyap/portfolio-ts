import './App.scss';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Breadcrumbs pageNo={"01"} pageTitle={"Custom Title"} />
      </div>
    </div>
  );
}

export default App;
