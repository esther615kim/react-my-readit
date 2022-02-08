import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import BottomNav from "./components/Layout/BottomNav";
import Profile from "./components/Layout/Profile";
import PostsPage from "./pages/PostsPage";
import { lightTheme, darkTheme } from "./styles/darkTheme";
import { StyledApp } from "./styles/shared.styled";

const App: React.FC = () => {
  // dark/light theme
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log("theme changed");
    setTheme((prev: string): any =>
      prev === "light" ? setTheme("dark") : setTheme("light")
    );
  };

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <StyledApp>
      <Profile />
      <Layout />
      <PostsPage />
      <BottomNav/>
    </StyledApp>
    // </ThemeProvider>
  );
};

export default App;
