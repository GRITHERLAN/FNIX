import logo from './logo.svg';
import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* metodo memo para componentes */}
        <Gestion></Gestion>
        {/* hook usememo */}
        {/* <Tareas></Tareas> */}
      </header>
    </div>
  );
}

export default App;
