import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import our custom CSS
import '../src/scss/styles.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
