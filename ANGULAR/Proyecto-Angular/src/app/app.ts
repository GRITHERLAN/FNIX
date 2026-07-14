import { Component, signal } from '@angular/core';
import { ListarHttp } from './components/listar-http/listar-http';

@Component({
  selector: 'app-root',
  imports: [ListarHttp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto-Angular');
}
