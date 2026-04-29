import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  /* se realiza ejemplo de comunicacion entre componentes */
  const ficha_Medica = {
    altura: '178cm',
    grupo: 'O-',
    estado: 'Bueno',
    alergias: 'Ninguna',
  };

  // const numero = 1234565;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido al master en React</p>
        {/* cargar mi componente */}
        <div className="componentes">
          <hr></hr>
          <EventosComponente></EventosComponente>
          <hr></hr>
          {/* poner datos como los siguientes en las etiquetas de los componentes, se almacenan en los parametros
          que se le pases a los componentes, Ej: TercerComponente(props) */}
          <TercerComponente ficha={ficha_Medica}></TercerComponente>
          <hr></hr>
          <SegundoComponente></SegundoComponente>
          <hr></hr>
          <MiComponente></MiComponente>
        </div>
      </header>
    </div>
  );
}

export default App;
