import React from "react";
import Images from "../Images/Images";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  
  function generate() {
    const color1 = `#${Math.floor(Math.random() * 2365412).toString(16).padStart(6, 0)} `;
    const color2 = `#${Math.floor(Math.random() * 1225362).toString(16).padStart(6, 0)} `;
    // console.log(color1, color2);

  
    navigate('generate', {state:{color1, color2}})
  }
  return (
    <>
      <header>
        <div className="logo-div">
          <Images src={"./assets/logo.png"} alt={"Logo"} />
          <span>Color Cascade</span>
        </div>
        <ul>
          <li>
            <NavLink
              to={"/"}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "brown" : "#043a46",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "brown" : "#043a46",
                };
              }}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"about"}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "brown" : "#043a46",
                };
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
        <div>
          <button onClick={generate}>
            Generate
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;


