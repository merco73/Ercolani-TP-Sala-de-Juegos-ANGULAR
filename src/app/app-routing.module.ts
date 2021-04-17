import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
// Sala juegos
// import { SalaJuegosComponent } from './componentes/juegos/sala-juegos/sala-juegos.component';
// import { PptComponent } from './componentes/juegos/ppt/ppt.component';
// import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';


const routes: Routes = [
  { path:'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path:'login', component: LoginComponent },
  { path:'quien-soy', component: QuienSoyComponent, canActivate:[AuthGuard]},
  { path:'registro', component: RegistroComponent },

  // Sala Juegos
  // { path:'sala-juegos', component: SalaJuegosComponent, canActivate:[AuthGuard]},
  // { path:'ppt', component: PptComponent, canActivate:[AuthGuard]},
  // { path:'tateti', component: TatetiComponent, canActivate:[AuthGuard]},
  {
    path:'juegos',
    loadChildren: () => import('./componentes/juegos/juegos.module').then(m => m.JuegosModule)
  },
  {path:'', redirectTo: 'home', pathMatch:'full'},
  // Redireccion
  { path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
