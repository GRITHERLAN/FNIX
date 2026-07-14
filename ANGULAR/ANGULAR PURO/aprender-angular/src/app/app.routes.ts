import { Routes } from '@angular/router';
import { Producto } from './components/producto/Producto';
import { Cine } from './components/cine/cine';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Carrito } from './components/carrito/carrito';
import { CarritoSignals } from './components/carrito-signals/carrito-signals';
import { Padre } from './components/padre/padre';
import { Pelicula } from './components/pelicula/pelicula';
import { UsuariosHTTP } from './components/usuarios-http/usuarios-http';
import { Error404 } from './components/error404/error404';
import { Formularios } from './components/formularios/formularios';
import { FormulariosReactivos } from './components/formularios-reactivos/formularios-reactivos';

/* Configuramos rutas */
export const routes: Routes = [
    { path: "", component: Producto },
    { path: "inicio", component: Producto },
    { path: "componentes", component: Producto },
    { path: "pipes", component: Usuario },
    { path: "ciclo-componentes", component: Usuario },
    { path: "plantillas", component: Usuario },
    { path: "directivas", component: Ventas },
    { path: "mdelos-y-clases", component: Cine },
    { path: "carrito", component: Carrito },
    { path: "carrito-con-signals", component: CarritoSignals },
    { path: "padre-hijo-comunicaciones", component: Padre },
    /* ruta con parametro, opcional */
    { path: "servicios/:id", component: UsuariosHTTP },
    { path: "servicios", component: UsuariosHTTP },
    { path: "formularios", component: Formularios },
    { path: "formularios-reactivos", component: FormulariosReactivos },
    { path: "**", component: Error404 }

];
