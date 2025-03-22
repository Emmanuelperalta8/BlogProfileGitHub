import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Summary } from "./components/Summary";  // Importando o componente Summary

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <Summary />  {/* Adicionando o Summary aqui */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
