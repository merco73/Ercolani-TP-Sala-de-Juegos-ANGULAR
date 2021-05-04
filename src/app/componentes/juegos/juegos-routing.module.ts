import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ListadoComponent } from './listado/listado.component';
import { MemotestComponent } from './memotest/memotest.component';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { PptComponent } from './ppt/ppt.component';
import { SalaJuegosComponent } from './sala-juegos/sala-juegos.component';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [
  {path:'',
    children:[
     {path:'sala-juegos', component: SalaJuegosComponent},
     {path:'ppt', component: PptComponent},
     {path:'tateti', component: TatetiComponent},
     {path:'mi-juego', component: MiJuegoComponent},
     {path:'memotest', component: MemotestComponent},
     {path:'listado', component: ListadoComponent},
     {path:'encuesta', component: EncuestaComponent},
     {path:'**', redirectTo:'sala-juegos'}
    ]
   }
 ];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
