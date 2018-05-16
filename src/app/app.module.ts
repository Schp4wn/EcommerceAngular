import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CounterComponent } from './counter/counter.component';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CounterComponent,
    DropdownToggleDirective,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    // Grâce au RouterModule, on définit toutes les routes de notre application
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
