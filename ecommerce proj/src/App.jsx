import { Routes, Route} from 'react-router';
import './App.css'
import {Homepage} from './pages/Homepage'
import {Checkoutpage } from './pages/Checkoutpage'
import {Orders} from './pages/Orderspage'
function App() {

  return (
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path="checkout" element={<Checkoutpage />}/> 
      <Route path= "orders" element ={<Orders/>}/>
    </Routes>
    
  )
}

export default App
