import "./App.css";
import Public from "./router/Public";
import Private from "./router/Private";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-3">
          <div>
            <Public />
            <Private />
          </div>
          {/* <div className="col-md-7">
            <img className="img-fluid w-100" src={rocketImg} alt="" />
          </div> */}
        </div>
    </Router>
  );
}

export default App;
