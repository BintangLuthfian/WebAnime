import React from "react";

const Navbar = () => {
  return (
    <nav 
    className="ms-[120px] " 
    style={{ borderBottom: "2px solid white", marginTop: "50px", borderRadius: "50px" }}
    >
      <h1
      style={{fontSize: "20px", marginLeft: "30px", fontWeight: "bold", textAlign: "center",  }}
      >Anime Ongoing</h1>
    </nav>
  );
};

export default Navbar;
