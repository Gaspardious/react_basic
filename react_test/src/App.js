import './App.css';
/* import Breadtext from './components/breadtext';
import Header from './components/header';
import Main from './components/main';
import OrderButton from './components/order_button';
import Receipt from './components/receipt_button'; */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';

function App() {
  return (
  <div>
    <Home />
    <Order />
{/*     <Header />
    <Main />
    <Breadtext />
    <OrderButton />
    <Receipt /> */}
  </div>
  );
}


export default App;


