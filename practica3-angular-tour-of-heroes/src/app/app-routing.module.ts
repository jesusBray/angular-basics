import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboarComponent } from "./dashboar/dashboar.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { PathLocationStrategy } from '@angular/common';

import { Hero } from './Hero';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboarComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
},)

export class AppRoutingModule {}
