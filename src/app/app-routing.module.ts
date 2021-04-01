import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path:'login', component: LoginComponent },
  { path:'quien-soy', component: QuienSoyComponent, canActivate:[AuthGuard]},
  { path:'registro', component: RegistroComponent },
  { path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
