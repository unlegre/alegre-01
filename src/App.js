import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { NavBar } from './components/navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
  <>
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi primer proyecto en react
        </a>
        <Button variant="primary">boton carrito
        < AiOutlineShoppingCart />
        </Button>
        <ItemListContainer greeting={"Bienvenidos a Nuestra App "} />

      </header>
    </div>
  </>
  );
}

export default App;
