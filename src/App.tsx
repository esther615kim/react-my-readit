import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import BottomNav from "./components/Layout/BottomNav";
import PostsPage from "./pages/PostsPage";
import { lightTheme, darkTheme } from "./styles/darkTheme";
import { StyledApp } from "./styles/shared.styled";
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import Profile from './components/Layout/Profile';
import { ArticleProvider } from './contexts/articleContext';
import { AuthProvider } from "./contexts/authContext";

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
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> </ThemeProvider>
    <AuthProvider>
    <ArticleProvider>
    <BrowserRouter>
    <StyledApp>
      <Profile />
      <Layout />
      <Routes>
          <Route path="/" element={< PostsPage/>} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/posts/:id" element={<DetailPage />} />
        </Routes>
      <BottomNav/>
    </StyledApp>
    </BrowserRouter>
    </ArticleProvider>
    </AuthProvider>
  );
};

export default App;
