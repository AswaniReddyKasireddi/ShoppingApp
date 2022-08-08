import Header from './components/Header';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>} exact/>
          <Route path="/cart"  element={<Cart/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
