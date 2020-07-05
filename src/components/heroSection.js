import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import {createGlobalStyle} from "styled-components";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${currectTheme.backgroundColor};;
  }
  `;
  return <GlobalStyle />;
};

export default HeroSection;
