import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>CV Creator</header>
    <main> <App/> </main>
    <footer>Designed and created by YC Wong 2023</footer>
  </React.StrictMode>,
)
