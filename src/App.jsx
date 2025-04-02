import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Settings from './components/Settings.jsx'
import Support from './components/Support.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <main>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='settings' element={<Settings/>}/>
            <Route path='support' element={<Support/>}/>
          </Routes>
        </main>
      <Footer/>
    </>
  )
}

export default App
