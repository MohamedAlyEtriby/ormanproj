import logo from "./logo.svg";
import "./App.css";
import Layout from "./Compnents/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Family.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import OrmanActivities from "./Pages/OrmanActivities/OrmanActivities";
import OrmanActivity from "./Pages/OrmanActivities/OrmanActivity/OrmanActivity";
import Banks from "./Pages/Banks/Banks";
import RegisterMagles from "./Compnents/RegisterMagles/RegisterMagles";
import Register from "./Compnents/Register/Register";
import Login from "./Compnents/Login/Login";
import { useEffect } from "react";
import Branches from "./Pages/Branches/Branches";
function App() {
  const history = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  }, [history]);
  return (
    <div className="App" style={{  }}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/Activities" element={<OrmanActivities />} />
          <Route exact path="/Activities/:id" element={<OrmanActivity />} />
          <Route exact path="/Banks" element={<Banks />} />
          <Route
            exact
            path="/RegisterManagement"
            element={<RegisterMagles />}
          />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Branches" element={<Branches />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
