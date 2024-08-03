import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ProductDisplay from './Components/productDisplay';
import Navbar from './Components/NavBar';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path='/' element={<ProductDisplay />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
