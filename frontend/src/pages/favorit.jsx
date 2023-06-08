import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";



// import Headermusic from "../components/headermusic/header";
// import TableList from "../components/tableList/tableList";

  const Favorit = () => {
    const [isToogle, setIsToogle] = useState(false);
    const toogleClick = () => {
      setIsToogle(!isToogle);
    };
    return (
        <React.Fragment>
        <Sidebar />
          <div>
            <NavigationBar />

        </div>
        </React.Fragment>
      );
    };
export default Favorit;
