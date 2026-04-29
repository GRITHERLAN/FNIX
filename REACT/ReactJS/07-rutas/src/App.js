import logo from './logo.svg';
import './App.css';
import { RouterPrincipal } from './routers/RouterPrincipal';

function App() {
  return (
    <div className="App">
      {/* carga el componente de las rutas */}
      <RouterPrincipal></RouterPrincipal>
    </div>
  );
}

export default App;
