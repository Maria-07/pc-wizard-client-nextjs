import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div>Navbar</div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default RootLayout;
