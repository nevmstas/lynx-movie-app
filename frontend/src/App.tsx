import React from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Global
          styles={css`
            ${emotionReset}

            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
            }
          `}
        />
        <div css={(theme) => ({ 
          color: theme.colors.primary,
          margin: '10px',
          padding: '20px',
          border: '2px solid hotpink',
          borderRadius: '5px',
          fontSize: '20px',
          textAlign: 'center'
        })}>
          <span>Lynx</span>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
