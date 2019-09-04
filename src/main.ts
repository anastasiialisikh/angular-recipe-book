import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { AppModule } from './app-server/app.module';
// import { AppModule } from './app-account/app.module';
// import { AppModule } from './app-routing/app.module';
// import { AppModule } from './app-observables/app.module';
// import { AppModule } from './app-template-forms/app.module';
// import { AppModule } from './app-reactive-forms/app.module';
// import { AppModule } from './app-pipe/app.module';
// import { AppModule } from './app-http/app-github/app.module';
import { AppModule } from './app-http/app-video/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
