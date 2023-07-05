import React from "react";

const Navbar = () => {
  return (
    <nav 
    className="ms-[120px] " 
    style={{ borderLeft: "5px solid white", marginTop: "50px", borderBottom: "1px solid white", }}
    >
      <h1
      style={{fontSize: "20px", marginLeft: "30px", fontWeight: "bold" }}
      >Anime</h1>
    </nav>
  );
};

export default Navbar;