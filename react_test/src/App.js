import './App.css';
import Breadtext from './components/breadtext';
import Header from './components/header';
import Main from './components/main';
import Order from './components/order_button';
import Receipt from './components/receipt_button';

function App() {
  return (
  <div>
    <Header />
    <Main />
    <Breadtext />
    <Order />
    <Receipt />
  </div>
  );
}

export default App;
