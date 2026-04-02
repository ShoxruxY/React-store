import './App.css'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Layout } from './Components/Layout'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Products } from './Pages/Products'

function App() {

  return (
   <Router>
     <Routes>
      <Route element={<Layout/>}>
       <Route path="/" element = {<Home/>}/>
       <Route path="/Products" element = {<Products/>}/>
       <Route path="/About" element = {<About/>}/>
       <Route path="/Contact" element = {<Contact/>}/>
        
      </Route>
     </Routes>
   </Router>
  )
}

export default App
