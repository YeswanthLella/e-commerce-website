import { Routes, Route} from 'react-router';
import './App.css'
import {Homepage} from './pages/Homepage'
import {Checkoutpage } from './pages/Checkoutpage'
function App() {

  return (
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path="checkout" element={<Checkoutpage />}/> 
    </Routes>
    
  )
}

export default App
