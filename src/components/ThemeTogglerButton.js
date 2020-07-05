import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import "./ThemeTogglerButton.css";

const ThemeTogglerButton = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" />
      <span
        className="slider round"
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      ></span>
      <p>
        light <span> --- </span> dark
      </p>
    </label>
  );
};
export default ThemeTogglerButton;
