import React from "react";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
