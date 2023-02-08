import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import LoginView from './routes/loginViews'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={  <App />}></Route>
    <Route path='login' element={  <LoginView />}></Route>
    <Route path='dashboard' element={  <DashboardView />}></Route>
    <Route path='dashboard/profile' element={  <EditProfileView />}></Route>
  </Routes>
  
  </BrowserRouter>

)
