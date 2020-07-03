import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
      AppComponent,
      NavigationComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [
      AppComponent,
      NavigationComponent
    ]
  })
  export class AppModule {

    constructor(private injector: Injector) {}

    ngDoBootstrap(): void {

      const { injector } = this;

      // create custom elements from angular components
      const navigationCustomElement = createCustomElement(NavigationComponent, { injector });

      // define in browser registry
      customElements.define('cs-navigation', navigationCustomElement);

    }
  }
