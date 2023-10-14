import React from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <div className={classes["image-title_container"]}>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hexahedron-2309152-1981421.png?f=webp"
          alt="logo"
          width={"100%"}
          height={"100%"}
        />
        Dashboard
      </div>
    </nav>
  );
};

export default Navbar;
