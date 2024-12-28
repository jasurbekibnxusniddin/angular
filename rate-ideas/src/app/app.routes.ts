import { Routes } from '@angular/router';
//import {HomeComponent} from './pages/home/home.component'
//import {NotFoundComponent} from './shared/components/not-found/not-found.component'


export const routes: Routes = [
		{path: "home", loadComponent: () => import('./pages/home/home.component')},
		{path: "", redirectTo: "home", pathMatch: "full"},
		{path: "not-found", 
			loadComponent: () => import('./shared/components/not-found/not-found.component').then(
				c => c.NotFoundComponent
			)
		},
		{path: "**", redirectTo: "not-found"},
	];
