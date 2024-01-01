import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import MainNav from "./MainNav/MainNav";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div style={{position:"fixed",top:"0",right:"0",width:"100%",zIndex:"99888484848484847473"}}>
        <HeaderNav />
        <MainNav />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
