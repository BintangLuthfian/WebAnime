import React, { useState } from "react";
import Sidebar from "../components/layouts/sidebar/sidebaradmin";
import Navbar from "../admin components/navbarsetting";

const settingadmin = () => {
  return (
    <React.Fragment>
        <Sidebar />
      <div> 
          </div>
          <div>
          <Navbar />
        </div>
        </React.Fragment>
      );
    };
export default settingadmin
