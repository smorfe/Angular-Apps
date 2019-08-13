import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { PageHome }        from './app.home';
import { PageAbout }        from './app.about';
import { PageDetail }           from './app.detail';

const appRoutes: Routes = [
  { path: 'home', component: PageHome },
  { path: 'about', component: PageAbout },  
  { path: 'detail/:currency', component: PageDetail },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageHome }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
