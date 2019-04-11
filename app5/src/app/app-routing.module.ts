import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routers } from './components/routes/routers';

const routes: Routes = [
  {
    path:Routers.defaultHome, redirectTo:`/${Routers.home}`, pathMatch:'full'
  },
  {
    path:Routers.home, component:HomeComponent
  },
  {
    path:Routers.login, component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
