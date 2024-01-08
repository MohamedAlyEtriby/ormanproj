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
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import { Table } from "react-bootstrap";
import Reciept from "./Compnents/Reciept/Reciept";
import RecieptPage from "./Pages/Reciept/RecieptPage";
import Profile from "./Pages/Profile/Profile";
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
          <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
          <Route exact path="/Table" element={<RecieptPage />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
