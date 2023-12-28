import logo from "./logo.svg";
import "./App.css";
import Layout from "./Compnents/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Elorman from "./Compnents/Elorman/Elorman";
import ElormanDesc from "./Compnents/ElormanDesc/ElormanDesc";
import PersonCard from "./Compnents/Personcard/PersonCard";
import { Col, Container, Row } from "react-bootstrap";
import Questions from "./Compnents/Questions/Questions";
import SuccessPart from "./Compnents/SuccessPart/SuccessPart";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import OrmanActivities from "./Pages/OrmanActivities/OrmanActivities";
import OrmanActivity from "./Pages/OrmanActivities/OrmanActivity/OrmanActivity";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/About" element={<AboutUs/>} />
          <Route exact path="/Activities" element={<OrmanActivities/>} />
          <Route exact path="/Activities/:id" element={<OrmanActivity/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
