import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/* al usar este funcion automaticamente busca el index.html y ejecuta el proyecto */
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
