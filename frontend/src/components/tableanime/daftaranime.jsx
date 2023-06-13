import React from "react";

const Table = ({ image, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "180px",
        height: "280px",
        padding: "2px",
        margin: "5px",
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
        marginLeft: "100px",
        padding: "20px",
      }}
    >
      <Table
        image="./assets/1.jpg"
        text="Full Metal"
      />
      <Table
        image="./assets/2.jpg"
        text="Kimi to Boku no Saigo no Senjou"
      />
      <Table
        image="./assets/3.jpg"
        text="Kimetsu No Yaiba"
      />
      <Table
        image="./assets/4.jpg"
        text="Demon Slayer"
      />
       <Table
        image="./assets/5.jpg"
        text="Chuninbyou"
      />
      <Table
        image="./assets/6.jpg"
        text="Fate Stay Night"
      />
      <Table
        image="./assets/7.jpg"
        text="Kubo-san"
      />
      <Table
        image="./assets/8.jpg"
        text="Vinlan Saga"
      />
      <Table
        image="./assets/9.jpg"
        text="Black Cover"
      />
      <Table
        image="./assets/10.jpg"
        text="Yanto dan 5 Kembar"
      />
      <Table
        image="./assets/11.jpg"
        text="Marimas Jeruk"
      />
       <Table
        image="./assets/12.jpg"
        text="Fate GrandOrder"
      />
      <Table
        image="./assets/13.jpg"
        text="Date A Life"
      />
      <Table
        image="./assets/14.jpg"
        text="Swoard Art Online"
      />
      <Table
        image="./assets/15.jpg"
        text="Raja Iblis magang"
      />
    </div>
  );
};

export default App;
