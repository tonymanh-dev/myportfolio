import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import GlobalStyles from './components/GlobalStyles'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
)