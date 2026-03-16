import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // .jsx를 빼고 써보세요. 보통 이게 더 안전합니다.
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
