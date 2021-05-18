import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineApplication, PlanetPortalApplication } from '@worktile/planet';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

defineApplication('app1', {
  template: `<app1-root class="app1-root"></app1-root>`,
  bootstrap: (portalApp: PlanetPortalApplication) => {
    console.log('1111111111111111111111111');
    return platformBrowserDynamic([
      {
        provide: PlanetPortalApplication,
        useValue: portalApp
      },
    ])
      .bootstrapModule(AppModule)
      .then(appModule => {
        return appModule;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }
});

