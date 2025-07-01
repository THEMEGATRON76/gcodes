import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './scrollbar.css' 
// import { initScrollBounce } from './scroll.js'
import App from './App.jsx'
// initScrollBounce({
//   bounceThreshold: 30,
//   scrollIndicator: true,
//   smoothScrollDuration: 600
// });
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
