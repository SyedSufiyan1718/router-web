import React, { useState } from "react";
import {  useLocation} from "react-router-dom";

function Colorcode() {
  const [copySuccess, setCopySuccess] = useState("");
  const location = useLocation();
  const { color1 = "#000000", color2 = "#FFFFFF" } = location.state || {};

  const gradientCode = `background-color: linear-gradient(to right, ${color1}, ${color2});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientCode);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div
      style={{
        height: "100vh",
        fontFamily: "monospace",
        maxWidth: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>
        Gradient Color HEX Code
      </h1>

      <div
        style={{
          background: `linear-gradient( to right, ${color1}, ${color2})`,
          padding: "1rem",
          borderRadius: "8px",
          margin: "1rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <pre style={{ color: "black" }}>
          <code>{gradientCode}</code>
        </pre>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={copyToClipboard}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007acc",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Copy Code
        </button>
      </div>

      {copySuccess && (
        <p style={{ color: "green", textAlign: "center", marginTop: "0.5rem" }}>
          {copySuccess}
        </p>
      )}
    </div>
  );
}

export default Colorcode;
