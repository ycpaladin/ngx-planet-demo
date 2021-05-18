import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Planet, SwitchModes } from '@worktile/planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo14';

  // @ViewChild('container', { static: true }) container: ElementRef<HTMLElement>;
  constructor(
    private planet: Planet,
  ) {

  }

  ngOnInit(): void {
    this.planet.setOptions({
      switchMode: SwitchModes.coexist,
      errorHandler: error => {
        console.log('', error);
      }
    });

    // const { nativeElement } = this.container;

    this.planet.registerApps([
      {
        name: 'app1',
        hostParent: '#app-host-container',
        routerPathPrefix: '/app1', // '/app1',
        resourcePathPrefix: '/static/app1/',
        selector: 'app1-root',
        preload: true,
        loadSerial: true,
        // switchMode: SwitchModes.coexist,
        scripts: [
          'main.js',
        ],
        // styles: ['styles.css'],
        manifest: '/static/app1/manifest.json',
        // extra: {
        //   name: '应用1',
        //   color: '#ffa415'
        // }
      },
      {
        name: 'app2',
        hostParent: '#app-host-container',
        routerPathPrefix: '/app2',
        selector: 'app2-root',
        resourcePathPrefix: '/static/app2/',
        preload: true,
        loadSerial: true,
        // switchMode: SwitchModes.coexist,
        scripts: [
          'main.js'
        ],
        // styles: ['styles.css'],
        manifest: '/static/app2/manifest.json',
        // extra: {
        //   name: '应用2',
        //   color: '#66c060'
        // }
      }
    ]);

    this.planet.start();
  }
}
