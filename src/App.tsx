import React, { useState } from 'react';
import styled,{ ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import PostsPage from './pages/PostsPage';
import { lightTheme,darkTheme } from './styles/darkTheme';

const App:React.FC = ()=> {
  // dark/light theme
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log("theme changed");
    setTheme((prev:string):any => 
      prev === "light" ? setTheme("dark") : setTheme("light")
    );
  };

  return(
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <div className="App">
      <h3>reddit</h3>
      <Layout/>
      <PostsPage/>
    </div>
    </ThemeProvider>
  )

};

export default App;
