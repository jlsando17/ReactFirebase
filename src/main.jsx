import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import LoginView from './routes/loginViews'
import DashboardView from './routes/DashboardView'
import EditProfileView from './routes/EditProfileView'
import SingOutView from './routes/SingOutView'
import PublicProfileView from './routes/PublicProfileView'
import ChooseUserNameView from './routes/ChooseUserNameView'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={  <App />}></Route>
    <Route path='login' element={  <LoginView />}></Route>
    <Route path='dashboard' element={  <DashboardView />}></Route>
    <Route path='dashboard/profile' element={  <EditProfileView />}></Route>
    <Route path='signout' element={  <SingOutView />}></Route>
    <Route path='u/:username' element={  <PublicProfileView />}></Route>
    <Route path='choose-username' element={  <ChooseUserNameView />}></Route>
  </Routes>
  
  </BrowserRouter>

)
