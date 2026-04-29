import { useNavigate } from 'react-router-dom';
import { Global } from '../../Helpers/Global';

export const Sidebar = () => {
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault();
    let mi_busqueda = e.target.search.value;
    navegar('/buscar/' + mi_busqueda, { replace: true });
  };

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={hacerBusqueda}>
          <input type="text" name="search" />
          <input type="submit" value="Buscar" id="search_"></input>
        </form>
      </div>
    </aside>
  );
};
