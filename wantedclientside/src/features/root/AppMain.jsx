/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import App from './App'
// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        // brand colors
        background: '#1d1d1d',
        text: '#fff',
        // you can also create your own color
        myDarkColor: '#ff4ecd'
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })
  


const AppMain = () => {
    <NextUIProvider theme={myDarkTheme}>
        <App />
    </NextUIProvider>
}

export default AppMain