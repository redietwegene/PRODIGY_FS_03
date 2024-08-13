import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ProductDisplay from './Components/productDisplay';
import Navbar from './Components/NavBar';
import Cart from './Components/Cart';
import AboutPage from './Components/Aboutus';
import Contactus from './Components/contactus';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path='/' element={<ProductDisplay />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={ <Contactus/>} />
      </Routes>
    </Router>
  );
}

export default App;
