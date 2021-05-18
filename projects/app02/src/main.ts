import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineApplication, PlanetPortalApplication } from '@worktile/planet';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


defineApplication('app2', {
  template: `<app2-root class="app2-root"></app2-root>`,
  bootstrap: (portalApp: PlanetPortalApplication) => {
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

