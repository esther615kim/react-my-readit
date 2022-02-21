import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { StyledApp } from "./styles/shared.styled";

import Layout from "./components/Layout";
import BottomNav from "./components/Layout/BottomNav";
import PostsPage from "./pages/PostsPage";

import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Page404 from './pages/Page404';

import { ArticleProvider } from "./contexts/articleContext";
import { AuthProvider } from "./contexts/authContext";
import { CommentProvider } from "./contexts/commentContext";
// import { lightTheme, darkTheme } from "./styles/darkTheme";

const App = () => {
  // dark/light theme
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme((prev) =>
      prev === "light" ? setTheme("dark") : setTheme("light")
    );
  };

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> </ThemeProvider>
    <AuthProvider>
      <ArticleProvider>
        <CommentProvider>
          <BrowserRouter>
            <StyledApp>
              <Layout />
              <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="/posts/:id" element={<DetailPage />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
              <BottomNav />
            </StyledApp>
          </BrowserRouter>
        </CommentProvider>
      </ArticleProvider>
    </AuthProvider>
  );
};

export default App;
