import logo from "./logo.svg";
import "./App.css";
import Layout from "./Compnents/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import './Family.css'
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import OrmanActivities from "./Pages/OrmanActivities/OrmanActivities";
import OrmanActivity from "./Pages/OrmanActivities/OrmanActivity/OrmanActivity";
import Banks from "./Pages/Banks/Banks";
function App() {
  return (
    <div className="App" style={{fontFamily:""}}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/About" element={<AboutUs/>} />
          <Route exact path="/Activities" element={<OrmanActivities/>} />
          <Route exact path="/Activities/:id" element={<OrmanActivity/>} />
          <Route exact path="/Banks" element={<Banks/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
