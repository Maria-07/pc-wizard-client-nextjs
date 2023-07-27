import React from "react";
import Navbar from "../UI/Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default RootLayout;
