import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import MainNav from "./MainNav/MainNav";
import Footer from "./Footer/Footer";
import Vectors from "../Home/CarosalHome/Vectors";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="dataIn2">
        <Vectors img="../../../assets/ui/Vector.png" title="إتبرع الأن" />
        <Vectors img="../../../assets/ui/Vector2.png" title="حقق الحلم" />
        <Vectors img="../../../assets/ui/Vector3.png" title="احسب زكاتك" />
        <Vectors img="../../../assets/ui/Vector4.png" title="WhatsApp" />
      </div>
      <div>
        <HeaderNav />
        <MainNav />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
