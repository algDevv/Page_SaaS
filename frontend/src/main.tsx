import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#3358ff"
    },
    warning: {
      main: "#ffa726"
    }
  },
  typography: {
    h1: {
      fontSize: "1.7rem",
      fontFamily: "montSerrat",
      fontWeight: "1000",
      textTransform: "none"
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: "montSerrat",
      fontWeight: "1000",
      textTransform: "none"

    }, h3: {
      fontSize: "1rem",
      fontFamily: "montSerrat",
      fontWeight: "800",
      textTransform: "none",
    }, h4: {
      fontSize: "0.8rem",
      fontFamily: "montSerrat",
      fontWeight: "400",
      textTransform: "none"
    }, h5: {
      fontSize: "0.6rem",
      fontFamily: "montSerrat",
      fontWeight: "500",
      textTransform: "none"
    },
    body2: {
      fontSize: "3rem",
      fontFamily: "montSerrat",
      fontWeight: "1000",
      textTransform: "none"
    }

  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,

)
