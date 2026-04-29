import logo from './logo.svg';
import './App.css';
import { ComponenteClave } from './components/ComponenteClave';

function App() {
  let fecha = new Date();
  let anio = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteClave anio={anio}></ComponenteClave>
      </header>
    </div>
  );
}

export default App;
