import { createGlobalStyle } from 'styled-components';

export const theme = {
  body: "#212121",
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

export const lightTheme = {
    body:'#fff',
    fontColor:"#212121"
};

export const darkTheme = {
    body:'#212121',
    fontColor:"#eee"
};

// export const DarkModeStyles = createGlobalStyle`
// body{
//   background-color:${(props) => props.theme.body}
// }
// ` 
