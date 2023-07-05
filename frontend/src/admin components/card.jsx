import React from "react";

const Box = ({ number, text, image, backgroundColor }) => {
  return (
    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "20px",
        padding: "0px",
        margin: "0px", 
        width: "280px",
        height: "120px",
        marginRight: "50px", 
        border: "2px solid blue"
        // backgroundColor: backgroundColor, // Menambahkan properti backgroundColor
      }}
    >
      <img src={image} alt="gambar" style={{ width: "80px", height: "80px", marginRight: "20px", marginLeft: "20px"}} />
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{number.toLocaleString()}</p>
          <p style={{ textAlign: "center" }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex", paddingLeft: "100px"}}>
      <Box
        number={5436}
        text="Anime"
        image="./assets/logo.png"
        // // backgroundColor="#4e26ac" 
      />
      <Box
        number={8769}
        text="Total Pengguna"
        image="./assets/logo.png"
        // backgroundColor="#31b843"
      />
      <Box
        number={56787}
        text="Total Anime"
        image="./assets/logo.png"
        backgroundColor="#f41853" 
      />
      <Box
        number={40}
        text="Request Anime"
        image="./assets/logo.png"
        // backgroundColor="#b3891f" 
      />
    </div>
  );
};

export default App;
