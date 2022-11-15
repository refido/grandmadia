import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './page/CartPage'
import CategoryPage from './page/CategoryPage'
import DetailPage from './page/DetailPage'
import LandingPage from './page/LandingPage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/detail/:id' element={<DetailPage />} />
        <Route exact path='/category' element={<CategoryPage />} />
        <Route exact path='/login/' element={<LoginPage />} />
        <Route exact path='/register/' element={<RegisterPage />} />
        <Route exact path='/cart/' element={<CartPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App