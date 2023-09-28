import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './routers.tsx'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
