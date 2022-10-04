import { ThemeProvider } from "styled-components"
import { Home } from "./pages/home"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/defaultTheme"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
  )
}

export default App
