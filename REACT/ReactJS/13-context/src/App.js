import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebasContext';
import { AppRouter } from './Routing/AppRouter';

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    /* cada vez que se actualice el estado usuario se gu|arda en el localstorage */
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  useLayoutEffect(() => {
    let datos = JSON.parse(localStorage.getItem('usuario'));
    setUsuario(datos);
  }, []);

  return (
    <div className="App">
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter></AppRouter>
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
