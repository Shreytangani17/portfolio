import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // ✅ Import Tailwind styles
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
