import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Generate() {
  const location = useLocation();
  const { color1 = "#000000", color2 = "#FFFFFF" } = location.state || {};
  const navigate = useNavigate();

  const style = {
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient( to right , ${color1}, ${color2})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: `black`,
    fontSize: "25px",
  };

  const btn = {
    border: "none",
    outline: "none",
    padding: "12px 18px",
    backgroundColor: "brown",
    color: "white",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: "bold",
    boxShadow: "2px 2px 8px rgb(155, 155, 155)",
    cursor: "pointer",
  };

  const back = () => {
    navigate(-1);
  };

  const code = () => {
    navigate(`${location.key}`, { state: { color1, color2 } });
  };

  return (
    <div style={style}>
      <div
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "280px",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Generate Page</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            marginTop: "12px",
          }}
        >
          <button style={btn} onClick={code}>
            Code
          </button>
          <button style={btn} onClick={back}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Generate;
