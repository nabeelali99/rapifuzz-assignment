import React, { useEffect, useState } from "react";

export const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setData(data);
        console.log(data);
      });
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        padding: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        minHeight: "100vh",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "normal",
        lineHeight: "1.5",
      }}
    >
      {data.map((item) => (
        <div
          class="card"
          style={{
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            marginBottom: "20px",
            marginTop: "20px",
            maxWidth: "300px",
            minHeight: "380px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",

            width: "18rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
            src={item.image}
            class="card-img-top"
            alt="..."
          ></img>
          <div
            style={{
              padding: "10px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              justifyContent: "center",
            }}
            class="card-body"
          >
            <h5 class="card-title">{item.title}</h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p class="card-text">{item.category}</p>
              <p class="card-text">{item.price}</p>
            </div>

            <a href="#" class="btn btn-primary" style={{ alignSelf: "center" }}>
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
