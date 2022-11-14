import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './page/DetailPage'
import LandingPage from './page/LandingPage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/detail/' element={<DetailPage />} />
        <Route exact path='/login/' element={<LoginPage />} />
        <Route exact path='/register/' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App