import './App.css'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Layout } from './Components/Layout'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Products } from './Pages/Products'
import { Cart } from './Pages/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);
  return (
   <Router>
     <Routes>
      <Route element={<Layout/>}>
       <Route path="/" element = {<Home/>}/>
       <Route path="/Products" element = {<Products cart = {cart} setCart = {setCart}/>}/>
       <Route path="/About" element = {<About/>}/>
       <Route path="/Contact" element = {<Contact/>}/>
       <Route path="/Cart" element = {<Cart cart = {cart} setCart = {setCart}/>}/>
        
      </Route>
     </Routes>
   </Router>
  )
}

export default App
