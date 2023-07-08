import React from "react";

const Table = ({ image, text,  topText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "180px",
        height: "280px",
        padding: "2px",
        margin: "10px",
        cursor: "pointer",
        border: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <img
          src={image}
          alt="Cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      padding: "5px",
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      fontSize: "13px",
      zIndex: "1",
    }}
  >
    {topText}
  </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
            
            zIndex: "1",
          }}
        >
          {text}
        </div>
        <div
        style={{
            position: "absolute",
            left: "0",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
            zIndex: "1",
          }}
        >
            {text}
        </div>

      </div>
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "10px",
        padding: "10px",
      }}
    >
      <Table
        image="./assets/1.jpg"
        text="Full Metal"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/2.jpg"
        text="Kimi to Boku no Saigo no Senjou"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/3.jpg"
        text="Kimetsu No Yaiba"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/4.jpg"
        text="Demon Slayer"
        topText="Rating: ../.."
      />
       <Table
        image="./assets/5.jpg"
        text="Chuninbyou"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/6.jpg"
        text="Fate Stay Night"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/7.jpg"
        text="Kubo-san"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/8.jpg"
        text="Vinlan Saga"
        topText="Rating: ../.."
      />
      <Table
        image="./assets/9.jpg"
        text="Black Cover"
        topText="Rating: ../.."
      />
    </div>
  );
};

export default App;
