import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './page/DetailPage'
import LandingPage from './page/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/detail/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App