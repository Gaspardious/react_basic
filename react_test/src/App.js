import './App.css';
import Breadtext from './components/breadtext';
import Header from './components/header';
import Main from './components/main';
import order from './components/order_button';

function App() {
  return (
  <div>
    <Header />
    <Main />
    <Breadtext />
    <order />
  </div>
  );
}

export default App;
